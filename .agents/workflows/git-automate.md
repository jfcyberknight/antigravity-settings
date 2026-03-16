---
description: Automatise la synchronisation de GEMINI.md et les opérations Git.
---

// turbo-all
# 🤖 Git Automate

Cet agent automatise la synchronisation bidirectionnelle de `GEMINI.md` et les opérations Git associées.

## 🛠️ Actions

1. **Synchronisation Bidirectionnelle** :
   Exécute le script de sync avec l'option AutoPush.
   ```powershell
   powershell.exe -ExecutionPolicy Bypass -File "sync_gemini.ps1" -AutoPush
   ```

2. **Vérification du Status** :
   ```powershell
   git status
   ```

## ⚡ Utilisation
Invoque `@[/git-automate]` après avoir modifié tes règles globales ou locales pour assurer une synchronisation parfaite.

## ✅ Critère de succès
Les deux fichiers `GEMINI.md` doivent être identiques et les changements locaux doivent être poussés sur le repository.
