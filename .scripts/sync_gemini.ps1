# GEMINI.md Synchronization Script
# This script synchronizes GEMINI.md between the global .gemini folder and the project repo.
# It always copies the newer file to the older location.
# Usage: .\sync_gemini.ps1 [-AutoPush]

param(
    [switch]$AutoPush
)

$GlobalGemini = "C:\Users\jf.vallee\.gemini\GEMINI.md"
$LocalGemini = "$PSScriptRoot\GEMINI.md"

if (-not (Test-Path $GlobalGemini)) {
    Write-Error "Global GEMINI.md not found at $GlobalGemini"
    exit 1
}

if (-not (Test-Path $LocalGemini)) {
    Write-Error "Local GEMINI.md not found at $LocalGemini"
    exit 1
}

$GlobalInfo = Get-Item $GlobalGemini
$LocalInfo = Get-Item $LocalGemini

Write-Host "Syncing GEMINI.md files..."
Write-Host "Global: $($GlobalInfo.LastWriteTime) ($GlobalGemini)"
Write-Host "Local : $($LocalInfo.LastWriteTime) ($LocalGemini)"

$syncPerformed = $false
$localToGlobal = $false

if ($GlobalInfo.LastWriteTime -gt $LocalInfo.LastWriteTime) {
    Write-Host ">> Global is newer. Syncing to Local..." -ForegroundColor Green
    Copy-Item $GlobalGemini $LocalGemini -Force
    $syncPerformed = $true
} elseif ($LocalInfo.LastWriteTime -gt $GlobalInfo.LastWriteTime) {
    Write-Host ">> Local is newer. Syncing to Global..." -ForegroundColor Green
    Copy-Item $LocalGemini $GlobalGemini -Force
    $syncPerformed = $true
    $localToGlobal = $true
} else {
    Write-Host ">> Files are already in sync (same timestamp)." -ForegroundColor Cyan
}

if ($syncPerformed -and $localToGlobal -and $AutoPush) {
    Write-Host ">> AutoPush enabled. Committing and pushing local changes..." -ForegroundColor Yellow
    git add GEMINI.md
    git commit -m "sync(gemini): update from global settings"
    git push
    Write-Host "Done."
} elseif ($syncPerformed) {
    Write-Host "Sync completed."
}
