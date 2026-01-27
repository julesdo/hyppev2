# 🤖 REFACTOR_V2_OPUS.md

**⚠️ SYSTEM PROMPT (OBLIGATOIRE) :**
**Tu agis en tant que Senior Principal Engineer.**
Pour toutes les tâches ci-dessous, utilise ton niveau de raisonnement le plus élevé (équivalent à **Anthropic Claude 3.5 Opus** ou **Claude 4.5**).

* **Ne résume pas** : sois exhaustif.
* **Ne simplifie pas** : utilise le vocabulaire technique précis (Next.js 16, RRF, Vector Ops).
* **Règle d'or** : Si tu modifies du code existant, assure-toi que le code reste compilable et respecte les conventions TypeScript strictes.

---

## CONTEXTE DU REPRINT (2026 ERA)

Nous transformons le portfolio `hyppe.run` d'un site "Freelance Créatif" vers un profil **"Senior Product Engineer & AI Architect"**.
La stack cible est : **Next.js 16 (App Router)**, **TypeScript 7**, **Tailwind CSS**.

---

## 📍 ÉTAPE 1 : METADATA & HERO SECTION

**Fichiers cibles :** `app/layout.tsx` et `app/hero-section/Hero.tsx`

**Instruction :** Remplace les textes existants par ces chaînes exactes.

1. **Metadonnée `title` :**
`"Jules-Camille | Senior Product Engineer & AI Architect"`
2. **Metadonnée `description` :**
`"Expert Next.js 16 & AI-Native Architectures. Je conçois des systèmes scalables et des moteurs de recherche hybrides. Ex-Coyote Group."`
3. **Hero Title (H1) :**
Remplacer "WEBSITE DEVELOPMENT · AUTOMATIONS" par :
**"AI-NATIVE ENGINEERING · SCALABLE SYSTEMS"**
4. **Hero Subtitle (P) :**
Remplacer la bio actuelle par :
**"Je conçois des architectures Next.js 16 haute performance et des moteurs IA Hybrides (RAG). Du Product Design Industriel (Ex-Coyote) à l'Ingénierie de Production."**
5. **CTA Principal :**
Remplacer "BOOK A CALL" par **"DISCUSS ARCHITECTURE"**.

---

## 💻 ÉTAPE 2 : INJECTION DES DONNÉES PROJETS (CRITIQUE)

**Fichier cible :** `app/work-section/projectDetails.ts` (ou l'array équivalent).

**Instruction :** Remplace **l'intégralité** du tableau `devProjects` par le code suivant. Copie ce code exactement pour garantir la cohérence technique.

```typescript
export const devProjects = [
  {
    id: 0,
    title: "High-Scale Media Engine", // AQUÍ MEDIA
    type: "Media Infrastructure",
    image: "URL_DE_TON_IMAGE_AQUI", // Garde l'image existante ou placeholder
    techStack: ["Next.js 16", "React 19", "Ghost (Headless)", "Redis", "Edge Caching"],
    shortDescription: "Infrastructure média haute dispo servant des millions de vues avec 100/100 CWV.",
    description: "Déploiement d'une infrastructure média critique. Utilisation du moteur TurboPack et de l'Incremental Static Regeneration (ISR) pour servir des pages statiques mises à jour en <50ms. Architecture découplée (Headless) sécurisant le CMS et permettant une stratégie de cache Edge agressive.",
    github: "lien_github_ou_null",
    demo: "https://aqui.media",
    available: true,
  },
  {
    id: 1,
    title: "AI-Native Knowledge Engine", // SEED (R&D)
    type: "R&D / AI Architecture",
    image: "URL_DE_TON_IMAGE_SEED", // Utilise une capture d'écran technique
    techStack: ["TypeScript 7", "Pinecone", "OpenAI SDK", "Convex", "RRF Algorithm"],
    shortDescription: "Moteur de recherche 'Agentic' hybride (Vector + Keyword) pour bases documentaires.",
    description: "Architecture d'un moteur de recherche capable de raisonner sur des données massives. Implémentation d'une Recherche Hybride (Reciprocal Rank Fusion) combinant embeddings vectoriels et recherche lexicale pour une précision chirurgicale. Streaming de données structurées via l'API OpenAI Responses.",
    github: "lien_github_ou_null",
    demo: "https://ton-lien-seed.com",
    available: true,
  },
  {
    id: 2,
    title: "Headless Art Commerce", // ANNE MONDY
    type: "Event-Driven Automation",
    image: "URL_DE_TON_IMAGE_ANNE_MONDY",
    techStack: ["Shopify Storefront API", "Next.js", "n8n", "Webhooks"],
    shortDescription: "Transformation e-commerce Headless avec orchestration logistique 100% automatisée.",
    description: "Refonte complète vers une architecture 'Headless' découplée. Le système utilise une approche Event-Driven : des Webhooks déclenchent des agents n8n autonomes pour générer les assets marketing et synchroniser les stocks en temps réel sans intervention humaine.",
    github: "lien_github_ou_null",
    demo: "https://annemondy.com",
    available: true,
  },
  {
    id: 3,
    title: "Industrial IoT Supervision", // UBIWAN
    type: "Enterprise SaaS",
    image: "URL_DE_TON_IMAGE_UBIWAN",
    techStack: ["Enterprise SaaS", "Complex Data Viz", "TypeScript", "Industrial IoT"],
    shortDescription: "Système de supervision de flotte critique pour leaders industriels (Fayat, Sarrion).",
    description: "Conception de systèmes de supervision IoT critiques. Traduction de flux de données télématiques massifs en tableaux de bord décisionnels temps réel. Architecture TypeScript stricte pour garantir la maintenance sur le long terme (5+ ans).",
    github: null,
    demo: "https://ubiwan.com",
    available: true,
  },
];
```

---

## 👤 ÉTAPE 3 : SECTION "ABOUT" & SKILLS

**Fichier cible :** `app/about-section/About.tsx`

**Instruction :**

1. **Bio :** Insère ce texte exact :
> "Ancien Product Designer chez **Groupe Coyote (Ubiwan)**, je combine la rigueur des environnements industriels avec la vélocité des stacks modernes (Next.js 16, AI). Je ne livre pas juste du code, je construis des actifs numériques résilients, maintenables et pensés pour le scale."


2. **Refonte de la liste des compétences (Skills) :**
Remplace les catégories actuelles par ces 3 colonnes "Engineering" :
* **Frontend Engineering :** Next.js 16, React Server Components, TypeScript 7, Tailwind, Framer Motion.
* **Backend & Data :** NestJS, PostgreSQL, Vector Databases (Pinecone), Convex, Redis.
* **AI Ops & Automation :** LLM Orchestration, RAG Pipelines, n8n, Firecrawl, Docker.



---

## 🎨 ÉTAPE 4 : UI UX REFINEMENT

**Fichiers cibles :** `app/work-section/ProjectCard.tsx` et `app/footer/Footer.tsx`

**Instruction :**

1. **Visibilité Tech Stack :** Modifie le composant `ProjectCard` pour que la liste `techStack` soit **toujours visible** (supprime la condition `hover` si elle existe pour l'affichage des technos). Un CTO doit voir "Next.js 16" sans avoir à survoler la carte.
2. **Signature Footer :** Ajoute cette ligne en petit, opacité 50%, sous le copyright :
> "Architecture running on Next.js 16 (Canary) & TypeScript 7."



---

## 🚀 ORDRE D'EXÉCUTION

1. Applique **l'ÉTAPE 2** en priorité (Injection des données).
2. Applique **l'ÉTAPE 1** (Hero).
3. Termine par **l'ÉTAPE 3 et 4**.

---

## ✅ ÉTAT ACTUEL (POST-REFACTOR) — COMPLÉTÉ

### Modifications appliquées :

- [x] **Metadata title** : "Jules-Camille | Senior Product Engineer & AI Architect"
- [x] **Metadata description** : "Expert Next.js 16 & AI-Native Architectures. Je conçois des systèmes scalables et des moteurs de recherche hybrides. Ex-Coyote Group."
- [x] **Hero Title** : "AI-NATIVE ENGINEERING · SCALABLE SYSTEMS"
- [x] **Hero Subtitle** : "Je conçois des architectures Next.js 16 haute performance et des moteurs IA Hybrides (RAG). Du Product Design Industriel (Ex-Coyote) à l'Ingénierie de Production."
- [x] **CTA** : "DISCUSS ARCHITECTURE"
- [x] **projectDetails.ts** : 4 projets techniques
  - High-Scale Media Engine (Aqui Media)
  - AI-Native Knowledge Engine (SEED R&D)
  - Headless Art Commerce (Anne Mondy)
  - Industrial IoT Supervision (Ubiwan/Coyote)
- [x] **About Section Bio** : "Ancien Product Designer chez Groupe Coyote (Ubiwan)..."
- [x] **Skills Engineering** :
  - Frontend Engineering : Next.js 16, React Server Components, TypeScript 7, Tailwind, Framer Motion
  - Backend & Data : NestJS, PostgreSQL, Vector Databases (Pinecone), Convex, Redis
  - AI Ops & Automation : LLM Orchestration, RAG Pipelines, n8n, Firecrawl, Docker
- [x] **Footer** : Signature "Running on Next.js 16 (Canary) & TypeScript 7."
- [x] **Carrousel Logos** : Priorité Enterprise (Ubiwan, Coyote, Fayat, Sarrion)

### Fichiers modifiés :

- `app/layout.tsx` — Metadata SEO
- `app/hero-section/Hero.tsx` — Hero Title, Subtitle, CTA
- `app/work-section/projectDetails.ts` — 4 projets Engineering
- `app/about-section/About.tsx` — Bio + Skills
- `app/about-section/songDetails.ts` — Logos Enterprise prioritaires
- `app/footer/Footer.tsx` — Signature technique

---

**Refactoring V2 Opus — TERMINÉ ✅**
