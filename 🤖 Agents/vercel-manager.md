---
description: Gère les déploiements Vercel et vérifie l'état des projets.
---

// turbo-all
# 🚀 Vercel Manager

Cet agent automatise la gestion de vos déploiements sur Vercel, en respectant la **Règle 5** (vérification des identités et configurations).

## 🛠️ Actions

1. **Vérification du Login** :
   ```powershell
   vercel whoami
   ```

2. **Status du Projet** :
   Consulte l'état du projet lié.
   ```powershell
   vercel inspect
   ```

3. **Liste des Déploiements** :
   Affiche les derniers déploiements et leur état.
   ```powershell
   vercel ls
   ```

4. **Logs en Temps Réel** :
   Affiche les logs du dernier déploiement.
   ```powershell
   vercel logs
   ```

5. **Déploiement (Vérification Initiale)** :
   Prépare un déploiement avec les vérifications nécessaires.
   ```powershell
   vercel deploy --prebuilt
   ```

## ✅ Règle 5 - Checklist
- [ ] Identité vérifiée (`vercel whoami`)
- [ ] Configuration de build validée
- [ ] Branche de production correcte

## ⚡ Utilisation
Invoque `@[/vercel-manager]` avant chaque mise en production pour assurer un déploiement sans erreur.
