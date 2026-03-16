# commit_push.ps1 - Antigravity Settings
# Usage: .\.scripts\commit_push.ps1 [-m "message"]

param(
    [Alias("m")]
    [string]$Message = ""
)

$RepoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $RepoRoot

# 1. Status
$status = git status --short
if (-not $status) {
    Write-Host "Rien a committer - working tree clean." -ForegroundColor Green
    exit 0
}

Write-Host "`nChangements detectes :" -ForegroundColor Cyan
git status --short

# 2. Validation version manifest.json
$modifiedManifests = git diff --name-only HEAD | Where-Object { $_ -match "manifest\.json$" }
$stagedManifests   = git diff --cached --name-only | Where-Object { $_ -match "manifest\.json$" }
$touchedManifests  = ($modifiedManifests + $stagedManifests) | Select-Object -Unique

# Detecte si des fichiers d'une extension ont ete modifies (hors manifest)
$extensionFiles = git diff --name-only HEAD | Where-Object { $_ -notmatch "manifest\.json$" -and ($_ -match "Extension Chrome" -or $_ -match "Extension Antigravity") }

if ($extensionFiles) {
    Write-Host "`nFichiers d'extension modifies detectes :" -ForegroundColor Yellow
    $extensionFiles | ForEach-Object { Write-Host "  $_" -ForegroundColor Yellow }

    # Trouve les manifests des extensions touchees qui n'ont PAS ete bumpes
    $bumpedDirs = $touchedManifests | ForEach-Object { Split-Path $_ -Parent }
    $extensionDirs = $extensionFiles | ForEach-Object { Split-Path $_ -Parent } | Select-Object -Unique

    foreach ($dir in $extensionDirs) {
        $manifestPath = Join-Path $RepoRoot $dir "manifest.json"
        if (-not (Test-Path $manifestPath)) { continue }

        $dirNorm = $dir -replace "\\", "/"
        $alreadyBumped = $bumpedDirs | Where-Object { ($_ -replace "\\", "/") -eq $dirNorm }

        if (-not $alreadyBumped) {
            Write-Host "`nATTENTION: manifest.json non bumpe dans '$dir'" -ForegroundColor Red
            $json = Get-Content $manifestPath -Raw | ConvertFrom-Json
            $current = [System.Version]$json.version
            $bumped  = "$($current.Major).$($current.Minor).$($current.Build + 1)"
            Write-Host "Version actuelle : $current  =>  Nouvelle version : $bumped" -ForegroundColor Cyan

            $choice = Read-Host "Bumper automatiquement vers $bumped ? (O/n)"
            if ($choice -ne 'n' -and $choice -ne 'N') {
                $raw = Get-Content $manifestPath -Raw
                $raw = $raw -replace """version"": ""$current""", """version"": ""$bumped"""
                [System.IO.File]::WriteAllText($manifestPath, $raw, [System.Text.Encoding]::UTF8)
                Write-Host "Version mise a jour : $bumped" -ForegroundColor Green
            } else {
                Write-Host "Version non modifiee - commit annule." -ForegroundColor Red
                exit 1
            }
        } else {
            $json = Get-Content $manifestPath -Raw | ConvertFrom-Json
            Write-Host "Version deja bumpee : $($json.version) dans '$dir'" -ForegroundColor Green
        }
    }
}

# 3. Message de commit
if (-not $Message) {
    $branch  = git rev-parse --abbrev-ref HEAD
    $date    = Get-Date -Format "yyyy-MM-dd HH:mm"
    $Message = "chore: update settings [$branch] - $date"
    Write-Host "`nMessage auto-genere : $Message" -ForegroundColor Yellow
}

# 4. Stage + Commit
git add -A
git commit -m $Message
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nCommit echoue." -ForegroundColor Red
    exit 1
}

# 5. Push
$remote = git remote
if (-not $remote) {
    Write-Host "`nAucun remote configure - push ignore." -ForegroundColor Yellow
    exit 0
}

Write-Host "`nPush en cours..." -ForegroundColor Cyan
git push
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nPush echoue. Verifiez votre remote / credentials." -ForegroundColor Red
    exit 1
}

Write-Host "`nCommit et push reussis." -ForegroundColor Green
