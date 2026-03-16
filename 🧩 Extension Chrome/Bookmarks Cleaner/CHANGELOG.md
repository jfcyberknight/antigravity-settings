# Changelog
Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.14.1] - 2026-03-16
### Changed
- **Branding**: Ajout d'une nouvelle icône premium 3D.
- **UI**: Refonte complète vers un design moderne avec glassmorphism et mode sombre.

## [3.14.0] - 2026-03-13
### Added
- Nouveau dossier **🤖 AI API** séparant les fournisseurs d'IA (Groq, OpenAI, Anthropic, Mistral, NVIDIA Build, Together AI, Replicate, etc.).
- Nouveau dossier **🔑 Consoles Dev** pour les consoles d'infrastructure (Google Cloud, AWS, Azure, Firebase, Supabase, Vercel, Netlify, Railway, Render).
- Ajout de `build.nvidia.com` dans **🤖 AI API**.
### Changed
- Fusion de l'ancien dossier `🔑 API & Consoles` en deux catégories plus précises.

## [3.13.0] - 2026-03-13
### Added
- Nouveau sous-dossier **🔑 API & Consoles** dans **💻 Profession** pour les portails d'accès aux APIs IA et consoles de développement.
- Mots-clés couverts : `groq`, `aistudio.google`, `platform.openai`, `api.anthropic`, `mistral.ai`, `together.ai`, `replicate`, `fireworks.ai`, `cohere`, `console.cloud.google`, `developer.nvidia`, `fal.ai`.

## [3.12.1] - 2026-03-13
### Fixed
- Suppression des mots-clés `crak` et `ads` de la catégorie **Crakmedia** qui interceptaient indûment des ressources de développement (`Github`, `Javascript`, `Vue.js`, etc.).
- Ces ressources retournent maintenant correctement dans **💻 Profession**.

## [3.12.0] - 2026-03-13
### Added
- Enrichissement des mots-clés de catégorisation pour les employeurs :
    - **GRICS** : Ajout de `Mozaïk`, `mozaikportal.ca`, `grics.ca`.
    - **Crakmedia** : Ajout de `CrakRevenue`, `Jerkmate`, `Streamate`.
    - **CISSSBSL** : Ajout du domaine officiel `cisss-bsl.gouv.qc.ca` et `carnetsante`.
- Ajout de `mermaid` dans la catégorie Développement.

## [3.11.0] - 2026-03-13
### Fixed
- Correction de l'erreur `Index out of bounds` lors de l'imbrication de dossiers (Vexco/Garde côtière sous Sygif).
- Ajout d'un compteur d'index indépendant par dossier parent (`parentCounters`) pour garantir des index valides.
- Plafonnement automatique de l'index dans la fonction `safeMove` pour une meilleure robustesse API.

## [3.10.0] - 2026-03-13
### Added
- Contextualisation du logiciel **SygReflex** comme produit central développé par **SYGIF**.

## [3.9.0] - 2026-03-13
### Changed
- Inversion de la priorité de détection pour favoriser les clients spécifiques (Vexco, Garde côtière) par rapport à la plateforme (SYGIF).
- Aspiration systématique de tout lien concernant Vexco vers son dossier client.

## [3.8.0] - 2026-03-13
### Added
- Identification automatique du client **Garde côtière** via le numéro de projet `37522`.
- Imbrication du dossier Garde côtière sous le parent **🏷️ SYGIF**.

## [3.7.0] - 2026-03-13
### Changed
- Imbrication du dossier **🏢 Vexco** à l'intérieur de **🏷️ SYGIF** pour refléter la relation client-fournisseur.
- Ajout de la gestion de cache des dossiers pour supporter les structures imbriquées dynamiques.

## [3.1.0] - [3.6.0] - 2026-03-13
### Added
- Ajout d'émojis pour toutes les catégories (💼, 💻, 🏠, 🏷️, 🏢).
- Mise en valeur spécifique de SYGIF (🏷️) en première position.
- Distinction de Vexco en tant que dossier indépendant initialement.

## [3.0.0] - 2026-03-13
### Added
- Restructuration majeure avec la création de la racine **💻 Profession** pour séparer les outils techniques des employeurs.
- Support de 4 dossiers racines.

## [2.1.0] - [2.6.0] - 2026-03-13
### Added
- Règles spécifiques pour les employeurs : GRICS, Crakmedia, CISSSBSL, PelicanCorp.
- Catégories **Animaux** (Maison) et **Santé**.
- Regroupement par marque (LinkedIn, Microsoft, etc.) dans des sous-dossiers.
### Changed
- Normalisation de la casse en "Title Case" pour les dossiers générés.

## [2.0.0] - 2026-03-13
### Added
- Implémentation du **Master Sort** avec repositionnement forcé de chaque élément pour un tri alphabétique parfait.

## [1.0.0] - [1.9.0]
### Added
- Passage de Python à une extension Chrome.
- Détection de patterns (Clustering) pour la création automatique de sous-dossiers thématiques.
