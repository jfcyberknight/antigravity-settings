# 🌌 Antigravity Settings & Extensions

Ce dépôt contient ma configuration personnalisée pour Antigravity, ainsi que des extensions spécialisées pour optimiser mon flux de travail.

## 🚀 Extensions Incluses

### 📊 Quota Monitor
Un système intelligent pour surveiller et estimer l'impact de tes requêtes sur ton quota d'IA.
- **Agent /quota-monitor** : Analyse de complexité et de tokens.
- **Dashboard Premium** : Interface située dans `🧩 Extension Chrome/quota_dashboard.html`.
- **Vercel Manager** : Workflow `🤖 Extension Antigravity/vercel-manager.md`.
- **Intégration Orchestrateur** : Coordonne les extensions.
- **Vercel Manager** : Automatise les déploiements et vérifie la conformité à la Règle 5.

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
Les agents sont situés dans `🤖 Extension Antigravity/`. Pour les activer, ils sont automatiquement copiés dans `.agents/workflows/`.
- Tu peux invoquer `@[/git-automate]` ou `@[/quota-monitor]` directement.

### 3. Extension Chrome (Dashboard)
L'extension se trouve dans le dossier `🧩 Extension Chrome/`.
1. Ouvre Chrome et accède à `chrome://extensions/`.
2. Active le **Mode développeur**.
3. Clique sur **Charger l'extension décompressée** et sélectionne le dossier `🧩 Extension Chrome` situé dans ce projet.
4. Épingle l'icône Antigravity Quota Monitor pour y accéder en un clic !

> [!NOTE]
> Le dashboard se met à jour toutes les 5 secondes en lisant le fichier `quota_data.js` mis à jour par l'agent `/quota-monitor`.

---

## 📂 Structure du Projet
- `🤖 Extension Antigravity/` : Workflows d'automatisation (Quota, Vercel, Git).
- `🧩 Extension Chrome/` : Manifest et Dashboard pour installation dans le navigateur.
- `GEMINI.md` : Règles de base et contexte global.
- `sync_gemini.ps1` : Utilitaire de synchronisation local/global.

---

## 🏷️ Tags Spécifiques
- **SYGIF-related** : Marqué avec 🏷️.
- **Travail** : 💼.
- **Profession** : 💻.
