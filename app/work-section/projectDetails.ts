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
    name: "Source Private Asset",
    description:
      "Redesigned the fund’s website and automated investor reporting. Result: faster updates, less manual work, stronger credibility with stakeholders.",
    technologies: ["Next.js", "TypeScript", "n8n"],
    github: "https://github.com/julesdo",
    demo: "https://sourceprivateassets.com/",
    image: require(".//../../public/projects/spa.png"),
    available: true,
  },
  {
    id: 1,
    name: "Anne Mondy (Headless Shopify)",
    description:
      "Built a fast online store for an artist, with automatic product creation and inventory synced in the background. Result: sales without extra admin effort.",
    technologies: ["Next.js", "Shopify GraphQL", "Tailwind CSS"],
    github: "https://github.com/julesdo",
    demo: "https://annemondy.com",
    image: require(".//../../public/projects/anne-mondy.png"),
    available: true,
  },
  {
    id: 2,
    name: "Aqui Media",
    description:
      "Delivered a media website with automated editorial workflow and GDPR-friendly analytics. Result: articles published faster, with better audience insights.",
    technologies: ["Next.js", "Framer Motion", "Ghost CMS"],
    github: "https://github.com/julesdo",
    demo: "https://aqui.media",
    image: require(".//../../public/projects/aqui-media.png"),
    available: true,
  },
  {
    id: 5,
    name: "La Stela Company",
    description:
      "Designed a creative website for an arts collective, showcasing agenda, team, and projects. Result: a professional presence matching their artistic identity.",
    technologies: ["Next.js", "Framer Motion", "GSAP"],
    github: "https://github.com/julesdo",
    demo: "https://stela-company.vercel.app/",
    image: require(".//../../public/projects/stela-company.png"),
    available: true,
  },
  {
    id: 6,
    name: "Automated B2B Prospecting",
    description:
      "Automated prospecting pipeline: events scraped, CRM enriched, and emails sequenced. Result: 60% less prep time, €5,000+ revenue in 3 months.",
    technologies: ["n8n", "Node.js", "Email Sequences"],
    github: "https://github.com/julesdo",
    demo: "",
    image: require(".//../../public/projects/crawler.png"),
    available: false,
  },
  {
    id: 7,
    name: "ProspectIn",
    description:
      "International prospecting tool to find events, sync calendars, enrich CRM, and follow up automatically. Result: more in-person meetings, less manual chasing.",
    technologies: ["Next.js", "React Native", "Convex.dev", "trigger.dev", "firecrawl"],
    github: "https://github.com/julesdo",
    demo: "",
    image: require(".//../../public/projects/prospectin.png"),
    available: false,
  },
  {
    id: 8,
    name: "Anne Mondy — Derivative Products Automation",
    description:
      "Built an automation pipeline to generate derivative products for each new artwork. Result: product pages and visuals created instantly, saving hours of manual work.",
    technologies: ["Express.js", "Redis", "Shopify GraphQL"],
    github: "https://github.com/julesdo",
    demo: "",
    image: require(".//../../public/projects/shopify-jobs.png"),
    available: false,
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
