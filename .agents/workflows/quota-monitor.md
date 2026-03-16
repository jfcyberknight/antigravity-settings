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
   # Estimation rapide basée sur la taille du repo et les fichiers ouverts
   $repoSize = (Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
   $openFilesCount = (Get-Process | Where-Object {$_.MainWindowTitle -match "Visual Studio Code"}).Count # Simplification
   Write-Host "--- QUOTA IMPACT REPORT ---"
   Write-Host "Repo Size: $repoSize MB"
   Write-Host "Complexity Level: MED"
   ```

2. **Générer le rapport visuel** :
   Ouvrir le fichier `quota_dashboard.html` pour une vue détaillée.

## ✅ Critère de succès
Fournir une estimation claire (🟢 BAS, 🟡 MOYEN, 🔴 ÉLEVÉ) avant de lancer des tâches lourdes.
