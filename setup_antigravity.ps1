# setup_antigravity.ps1
# Script d'installation rapide pour Antigravity IDE

Write-Host "🌌 Installation des extensions Antigravity..." -ForegroundColor Cyan

# 1. Création du dossier de workflows si inexistant
$workflowDir = Join-Path $PSScriptRoot ".agents\workflows"
if (!(Test-Path $workflowDir)) {
    New-Item -ItemType Directory -Path $workflowDir -Force
}

# 2. Copie des agents vers le dossier système
Write-Host "🔄 Synchronisation des agents..."
# On cherche spécifiquement le dossier qui commence par le emoji robot ou s'appelle exactement '🤖 Agents'
$agentsSource = Get-ChildItem -Directory -Path $PSScriptRoot | Where-Object { $_.Name -match "^..Agents$|^🤖 Agents$" -and $_.Name -notlike ".*" } | Select-Object -ExpandProperty FullName -First 1

# fallback si le regex échoue (PowerShell encoding)
if (!$agentsSource) {
    $agentsSource = Get-ChildItem -Directory -Path $PSScriptRoot | Where-Object { $_.Name -like "*Agents*" -and $_.Name -notlike ".*" } | Select-Object -ExpandProperty FullName -First 1
}

if ($agentsSource) {
    Copy-Item "$agentsSource\*.md" $workflowDir -Force
    Write-Host "✅ Agents synchronisés depuis : $(Split-Path $agentsSource -Leaf)" -ForegroundColor Green
} else {
    Write-Error "❌ Dossier 'Agents' non trouvé dans $PSScriptRoot"
}

# 3. Synchronisation du fichier GEMINI.md
if (Test-Path "$PSScriptRoot\sync_gemini.ps1") {
    Write-Host "🔄 Synchronisation de GEMINI.md..."
    powershell.exe -ExecutionPolicy Bypass -File "$PSScriptRoot\sync_gemini.ps1"
}

Write-Host "`n✅ Terminé ! Les extensions sont prêtes." -ForegroundColor Green
Write-Host "Invoque @[/orchestrator] ou @[/quota-monitor] pour commencer." -ForegroundColor Yellow
