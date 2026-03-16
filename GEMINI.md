# User Rules & Project Context

## 1. Terminal Execution Rules
- **Terminal Command Auto Execution**: Always Proceed.
- **Permission**: Always run terminal commands without asking for permission.
- **Allow List**: `["*"]` (Allow all commands).

## 2. Web Design & Aesthetics (Premium Standard)
- **WOW Factor**: Every design must feel premium and state-of-the-art. Avoid simple MVPs.
- **Visual Excellence**:
    - Use curated, harmonious color palettes (HSL tailored).
    - Implement sleek dark modes and glassmorphism.
    - Use modern typography (Google Fonts like Inter, Roboto, Outfit) instead of browser defaults.
- **Interactivity**: Add smooth micro-animations, transitions, and hover effects.
- **Inspiration Visuelle**: Toutes les applications et interfaces doivent s'inspirer du style et de l'esthétique de l'image : `C:\Users\jf.vallee\project\darkmedia\.youtube\Gemini_Generated_Image_u9p12ou9p12ou9p1.png`.
- **Demonstration**: Never use generic placeholders. Use `generate_image` for realistic assets.

## 3. Technical Stack & Development
- **Core**: HTML for structure, Javascript for logic.
- **Styling**: Vanilla CSS for maximum flexibility. Avoid TailwindCSS unless explicitly requested.
- **Frameworks**: Use Next.js or Vite only if explicitly requested.
- **npx Workflow**: Always run `npx` commands with `--help` first to see available options.
- **Execution**: Use `npm run dev` for local development.

## 4. Project & Resource Categorization (Emojis & Folders)
- **Visuals**: Use emojis for all high-level folders and categories.
- **Organization**:
    - **💼 Travail**: Dedicated to employers (GRICS, Crakmedia, CISSSBSL, SYGIF, PelicanCorp).
    - **💻 Profession**: Technical resources (Développement, Cloud, IA, etc.).
- **Specific Tags**: SYGIF-related items should be marked with the 🏷️ tag.

## 5. Git & Workflow Conventions
- **Deployment**: Verify all identities and configurations before deploying to Vercel.
- **Extensions**: Toujours incrémenter le numéro de version (version bump) dans le `manifest.json` lors de la modification d'une extension.
- **SEO**: Automatically implement SEO best practices (descriptive titles, meta descriptions, semantic HTML).

## 6. SQL & WLanguage Style (WinDev)
- **Formatting**: Use uppercase for SQL keywords (`SELECT`, `FROM`, `JOIN`, `WHERE`).
- **Naming**: Explicitly use `AS` for column aliases.
- **Parameters**: Use the `{pParameterName}` syntax for query parameters.

## 7. Active Project: ISO 20022 Migration (Desjardins)
- **Goal**: Standardize on the **PAIN.001 v9** format (replacing V2).
- **Core Reference**: `PDF/Spécifications PAIN001v9_FR_202602.pdf`.
- **Key Milestones 2026**:
    - **29 mai**: Début SIT (Essais d'intégration système).
    - **31 août**: Début UAT (Essais d'acceptation utilisateurs).
    - **19 octobre**: Point décisionnel (Go / No Go).
    - **30 octobre**: Mise en service (MES).
    - **14 novembre**: Début du support étendu.

## 8. Quota & Performance Monitoring
- **Heuristique** : Avant chaque tâche complexe, l'Orchestrateur peut appeler `/quota-monitor` pour estimer l'impact.
- **Visibilité** : Le dashboard premium `quota_dashboard.html` est la référence visuelle pour l'état du système.
- **Optimisation** : Prioriser les solutions à faible consommation de tokens quand plusieurs approches sont possibles.
