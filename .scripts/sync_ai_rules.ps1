# sync_ai_rules.ps1 - Synchronise GEMINI.md vers tous les fichiers de regles AI
# Usage: .\.scripts\sync_ai_rules.ps1

$RepoRoot = Split-Path -Parent $PSScriptRoot
$Source   = Join-Path $RepoRoot "GEMINI.md"

if (-not (Test-Path $Source)) {
    Write-Host "GEMINI.md introuvable." -ForegroundColor Red
    exit 1
}

$SourceContent = Get-Content $Source -Raw -Encoding UTF8
$Header = "> **Auto-synced from ``GEMINI.md`` -- source of truth. Run ``.scripts/sync_ai_rules.ps1`` to update.**`n`n"

$Targets = @{
    "CLAUDE.md"                          = $Header + $SourceContent
    "AGENTS.md"                          = $Header + $SourceContent
    ".github/copilot-instructions.md"    = $Header + $SourceContent
    ".cursorrules"                       = "# Auto-synced from GEMINI.md -- run .scripts/sync_ai_rules.ps1 to update.`n`n" + $SourceContent
}

foreach ($File in $Targets.Keys) {
    $Path = Join-Path $RepoRoot $File
    $Dir  = Split-Path $Path -Parent
    if (-not (Test-Path $Dir)) { New-Item -ItemType Directory -Path $Dir | Out-Null }
    [System.IO.File]::WriteAllText($Path, $Targets[$File], [System.Text.Encoding]::UTF8)
    Write-Host "Synced: $File" -ForegroundColor Green
}

Write-Host "`nSync termine. Tous les AI respecteront vos regles." -ForegroundColor Cyan
