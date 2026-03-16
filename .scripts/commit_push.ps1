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

# 2. Message de commit
if (-not $Message) {
    $branch  = git rev-parse --abbrev-ref HEAD
    $date    = Get-Date -Format "yyyy-MM-dd HH:mm"
    $Message = "chore: update settings [$branch] - $date"
    Write-Host "`nMessage auto-genere : $Message" -ForegroundColor Yellow
}

# 3. Stage + Commit
git add -A
git commit -m $Message
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nCommit echoue." -ForegroundColor Red
    exit 1
}

# 4. Push
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
