# 🌌 Antigravity Settings & Extensions

Ce dépôt contient ma configuration personnalisée pour Antigravity, ainsi que des extensions spécialisées pour optimiser mon flux de travail.

## 🚀 Extensions Incluses

### 📊 Quota Monitor
Un système intelligent pour surveiller et estimer l'impact de tes requêtes sur ton quota d'IA.
- **Agent /quota-monitor** : Analyse de complexité et de tokens.
- **Dashboard Premium** : Interface `quota_dashboard.html` avec design glassmorphic et stats en temps réel.
- **Intégration Orchestrateur** : Alertes automatiques pour les tâches lourdes.

### 🔄 GEMINI Sync
Script de synchronisation automatique pour garder ton fichier `GEMINI.md` global à jour avec ta configuration de dépôt.

---

## 🛠️ Installation dans Antigravity

Pour installer et activer ces outils dans ton environnement Antigravity :

### 1. Synchronisation de la Configuration
Exécute le script de synchronisation pour lier ton `GEMINI.md` global :
```powershell
.\sync_gemini.ps1
```

### 2. Chargement des Agents
Les agents situés dans `.agents/workflows/` sont détectés automatiquement par Antigravity lorsqu'ils sont présents dans ton espace de travail actif.
- Assure-toi que ce dépôt est ouvert ou que les fichiers sont synchronisés vers ton dossier de scratch via `@[/agent-sync]`.

### 3. Utilisation du Dashboard
Pour consulter ton quota visuellement :
1. Ouvre `quota_dashboard.html` dans ton navigateur préféré.
2. Le dashboard se met à jour dynamiquement en fonction des métriques fournies par l'agent `/quota-monitor`.

---

## 📂 Structure du Projet
- `.agents/workflows/` : Agents spécialisés (Orchestrator, Quota Monitor, etc.).
- `GEMINI.md` : Règles de base et contexte global.
- `quota_dashboard.html` : Interface visuelle premium.
- `sync_gemini.ps1` : Utilitaire de synchronisation local/global.

---

## 🏷️ Tags Spécifiques
- **SYGIF-related** : Marqué avec 🏷️.
- **Travail** : 💼.
- **Profession** : 💻.
