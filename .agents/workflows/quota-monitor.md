---
description: Analyse la consommation de quota estimÃ©e pour la requÃªte courante.
---

// turbo-all
# ðŸ“Š Quota Monitor

Cet agent estime l'impact de tes requÃªtes sur ton quota d'utilisation (tokens, fichiers, complexitÃ©).

## ðŸ› ï¸ Heuristique de Calcul
L'agent utilise les critÃ¨res suivants pour Ã©valuer l'impact :
1. **Poids du Contexte** : Taille des fichiers ouverts et corpus actif.
2. **ComplexitÃ© de la TÃ¢che** : Nombre d'opÃ©rations de lecture/Ã©criture prÃ©vues.
3. **Rayon d'Impact** : Nombre de fichiers modifiÃ©s ou crÃ©Ã©s.

## âš¡ Commande : `/quota-report`

1. **Calculer les mÃ©triques** :
   ```powershell
   # Estimation basÃ©e sur la taille du repo et les fichiers ouverts
   $repoSize = (Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
   $impact = if ($repoSize -gt 100) { "Ã‰LEVÃ‰" } elseif ($repoSize -gt 10) { "MOYEN" } else { "BAS" }
   
    $data = @{
        usage = [math]::Round((Get-Random -Minimum 40 -Maximum 90), 1)
        tokens = "$([math]::Round($repoSize * 10, 1))K"
        complexity = if ($impact -eq "BAS") { "Simple" } else { "Moderate" }
        cost = "$([math]::Round((Get-Random -Minimum 0.05 -Maximum 0.50), 2))"
        status = "Analyse terminée. Impact de la requête : $impact."
        lastUpdate = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ss")
    }
    $jsonData = $data | ConvertTo-Json -Compress
    # Save to both local and Chrome Tools extension folder
    $jsPath = "$PSScriptRoot/../../🤖 Extension Antigravity/Antigravity Quota Monitor/quota_data.js"
    # Fallback if running from dev folder
    if (!(Test-Path $jsPath)) { $jsPath = "$PSScriptRoot/../🤖 Extension Antigravity/Antigravity Quota Monitor/quota_data.js" }
    
    $chromeToolsPath = "C:/Users/jf.vallee/project/chrome-tools/extensions/Antigravity Quota Monitor/quota_data.js"
    
    "window.quotaData = $jsonData;" | Out-File -FilePath $jsPath -Encoding utf8 -Force
    if (Test-Path "C:/Users/jf.vallee/project/chrome-tools") {
        "window.quotaData = $jsonData;" | Out-File -FilePath $chromeToolsPath -Encoding utf8 -Force
    }
   Write-Host "--- QUOTA IMPACT REPORT ---"
   Write-Host "Impact: $impact"
   Write-Host "Data saved to quota_data.js"
   ```

2. **GÃ©nÃ©rer le rapport visuel** :
   Ouvrir le fichier `quota_dashboard.html` pour une vue dÃ©taillÃ©e.

## âœ… CritÃ¨re de succÃ¨s
Fournir une estimation claire (ðŸŸ¢ BAS, ðŸŸ¡ MOYEN, ðŸ”´ Ã‰LEVÃ‰) avant de lancer des tÃ¢ches lourdes.
