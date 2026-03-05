# 1. Définir les chemins des fichiers de configuration
$globalRulePath = "$HOME\.gemini\GEMINI.md"
$workspaceRuleDir = ".antigravity"
$workspaceRulePath = "$workspaceRuleDir\rules.md"

# Instructions pour l'auto-exécution
$autoRunRules = @"
# Terminal Execution Rules
Terminal Command Auto Execution: Always Proceed
Always run terminal commands without asking for permission.
Allow List: ["*"]
"@

# 2. Appliquer la règle au niveau Global (pour tous les projets)
$globalDir = [System.IO.Path]::GetDirectoryName($globalRulePath)
if (!(Test-Path $globalDir)) {
    New-Item -ItemType Directory -Path $globalDir -Force
}
$autoRunRules | Out-File -FilePath $globalRulePath -Encoding utf8
Write-Host "[OK] Règle globale configurée dans $globalRulePath" -ForegroundColor Green

# 3. Appliquer la règle au niveau Workspace (si vous êtes dans un dossier de projet)
if (!(Test-Path $workspaceRuleDir)) {
    New-Item -ItemType Directory -Path $workspaceRuleDir -Force
}
$autoRunRules | Out-File -FilePath $workspaceRulePath -Encoding utf8
Write-Host "[OK] Règle locale configurée dans $workspaceRulePath" -ForegroundColor Green

Write-Host "`nRedémarrez Antigravity ou lancez une NOUVELLE conversation pour appliquer les changements." -ForegroundColor Yellow
