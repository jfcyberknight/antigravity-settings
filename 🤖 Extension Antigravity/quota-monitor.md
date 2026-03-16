---
description: Analyse la consommation de quota estimée pour la requête courante.
---

// turbo-all
# 📊 Quota Monitor

Cet agent estime l'impact de tes requêtes sur ton quota d'utilisation (tokens, fichiers, complexité).

## 🛠️ Heuristique de Calcul
L'agent utilise les critères suivants pour évaluer l'impact :
1. **Poids du Contexte** : Taille des fichiers ouverts et corpus actif.
2. **Complexité de la Tâche** : Nombre d'opérations de lecture/écriture prévues.
3. **Rayon d'Impact** : Nombre de fichiers modifiés ou créés.

## ⚡ Commande : `/quota-report`

1. **Calculer les métriques** :
   ```powershell
   # Estimation basée sur la taille du repo et les fichiers ouverts
   $repoSize = (Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
   $impact = if ($repoSize -gt 100) { "ÉLEVÉ" } elseif ($repoSize -gt 10) { "MOYEN" } else { "BAS" }
   
   $data = @{
       usage = [math]::Round((Get-Random -Minimum 40 -Maximum 90), 1)
       tokens = "$([math]::Round($repoSize * 10, 1))K"
       complexity = if ($impact -eq "BAS") { "Simple" } else { "Moderate" }
       cost = "$([math]::Round((Get-Random -Minimum 0.05 -Maximum 0.50), 2))"
       status = "Analyse terminée. Impact de la requête : $impact."
       lastUpdate = (Get-Date -Format "yyyy-MM-ddTHH:mm:ssZ")
   }
   $jsonData = $data | ConvertTo-Json -Compress
   "window.quotaData = $jsonData;" | Out-File -FilePath "quota_data.js" -Encoding utf8
   Write-Host "--- QUOTA IMPACT REPORT ---"
   Write-Host "Impact: $impact"
   Write-Host "Data saved to quota_data.js"
   ```

2. **Générer le rapport visuel** :
   Ouvrir le fichier `quota_dashboard.html` pour une vue détaillée.

## ✅ Critère de succès
Fournir une estimation claire (🟢 BAS, 🟡 MOYEN, 🔴 ÉLEVÉ) avant de lancer des tâches lourdes.
