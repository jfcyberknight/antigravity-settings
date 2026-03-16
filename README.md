# 🌌 Antigravity Settings & Extensions

Ce dépôt contient ma configuration personnalisée pour Antigravity, ainsi que des extensions spécialisées pour optimiser mon flux de travail.

## 🚀 Extensions Incluses

### 📊 Quota Monitor
Un système intelligent pour surveiller et estimer l'impact de tes requêtes sur ton quota d'IA.
- **Agent /quota-monitor** : Analyse de complexité et de tokens.
- **Dashboard Premium** : Interface `quota_dashboard.html` avec design glassmorphic et stats en temps réel.
- **Intégration Orchestrateur** : Alertes automatiques pour les tâches lourdes.
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
Les agents situés dans `.agents/workflows/` sont détectés automatiquement par Antigravity lorsqu'ils sont présents dans ton espace de travail actif.
- Assure-toi que ce dépôt est ouvert ou que les fichiers sont synchronisés vers ton dossier de scratch via `@[/agent-sync]`.

### 3. Extension Chrome (Dashboard)
Tu peux maintenant utiliser le dashboard comme une extension Chrome pour un accès rapide :
1. Ouvre Chrome et accède à `chrome://extensions/`.
2. Active le **Mode développeur** (en haut à droite).
3. Clique sur **Charger l'extension décompressée** et sélectionne le dossier de ce projet (`c:\Users\jf.vallee\project\antigravity-settings`).
4. Épingle l'icône Antigravity Quota Monitor pour y accéder en un clic !

> [!NOTE]
> Le dashboard se met à jour toutes les 5 secondes en lisant le fichier `quota_data.js` mis à jour par l'agent `/quota-monitor`.

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
