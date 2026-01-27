export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "High-Scale Media Engine",
    description:
      "Déploiement d'une infrastructure média haute disponibilité. Utilisation du moteur TurboPack et de l'Incremental Static Regeneration (ISR) pour servir des millions de pages statiques mises à jour en <50ms. Score Core Web Vitals de 100/100 grâce à une stratégie de cache Edge agressive.",
    technologies: ["Next.js 16 (App Router)", "React 19", "Ghost (Headless)", "Redis", "Vercel Edge"],
    github: "https://github.com/julesdo",
    demo: "https://aqui.media",
    image: require(".//../../public/projects/aqui-media.png"),
    available: true,
  },
  {
    id: 1,
    name: "AI-Native Knowledge Engine",
    description:
      "Architecture d'un moteur RAG (Retrieval-Augmented Generation) 'Agentic' capable de raisonner sur des bases documentaires massives. Implémentation d'une Semantic Search hybride (Reciprocal Rank Fusion) combinant embeddings vectoriels et recherche par mots-clés pour une précision chirurgicale. Streaming de données structurées via l'API OpenAI Responses.",
    technologies: ["RAG Pipeline", "Semantic Search", "Pinecone", "OpenAI SDK", "TypeScript"],
    github: "https://github.com/julesdo",
    demo: "https://seedmedia.vercel.app",
    image: require(".//../../public/projects/seed-preview.png"),
    available: false,
  },
  {
    id: 2,
    name: "Headless Art Commerce",
    description:
      "Transformation complète d'un workflow e-commerce via une architecture 'Headless'. Le système utilise une approche Event-Driven : des Webhooks déclenchent des agents n8n autonomes pour générer les assets et synchroniser les stocks en temps réel, éliminant 100% de l'administration manuelle.",
    technologies: ["Shopify Storefront API", "Next.js", "n8n", "Webhooks"],
    github: "https://github.com/julesdo",
    demo: "https://annemondy.com",
    image: require(".//../../public/projects/anne-mondy.png"),
    available: true,
  },
  {
    id: 3,
    name: "Industrial IoT Supervision",
    description:
      "Conception de systèmes de supervision de flotte critiques pour Fayat TP et Sarrion (via Ubiwan / Groupe Coyote). Traduction de flux de données télématiques massifs (IoT) en tableaux de bord décisionnels temps réel, basés sur une architecture TypeScript stricte et des couches de visualisation haute performance.",
    technologies: ["Enterprise SaaS", "Complex Data Viz", "TypeScript", "Industrial IoT"],
    github: "https://github.com/julesdo",
    demo: "https://ubiwan.com",
    image: require(".//../../public/projects/ubiwan.png"),
    available: true,
  },
];


export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
