# GEMINI.md Synchronization Script
# This script synchronizes GEMINI.md between the global .gemini folder and the antigravity-settings repo.
# It always copies the newer file to the older location.

$GlobalGemini = "C:\Users\jf.vallee\.gemini\GEMINI.md"
$LocalGemini = "c:\Users\jf.vallee\project\antigravity-settings\GEMINI.md"

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

if ($GlobalInfo.LastWriteTime -gt $LocalInfo.LastWriteTime) {
    Write-Host ">> Global is newer. Syncing to Local..." -ForegroundColor Green
    Copy-Item $GlobalGemini $LocalGemini -Force
    Write-Host "Done."
} elseif ($LocalInfo.LastWriteTime -gt $GlobalInfo.LastWriteTime) {
    Write-Host ">> Local is newer. Syncing to Global..." -ForegroundColor Green
    Copy-Item $LocalInfo $GlobalGemini -Force
    Write-Host "Done."
} else {
    Write-Host ">> Files are already in sync (same timestamp)." -ForegroundColor Cyan
}
