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
      "Investment fund: website redesign and automated reporting workflows to streamline investor updates.",
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
      "Artist storefront: headless Shopify with GraphQL APIs, dynamic product generation and automated back‑office ops.",
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
      "Regional media: Next.js + Framer Motion + Tailwind, Ghost CMS headless, Umami analytics, fully automated editorial workflow with n8n + Node (firecrawl) + rotating proxy.",
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
      "Arts collective: Next.js site with Framer Motion and GSAP. Sections include Agenda, Team, About, and Contact.",
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
      "Scraping of events (Meetup, Eventbrite, LinkedIn) → CRM enrichment → automated email sequences. Results: +60% prep time saved, +€5,000 revenue in 3 months.",
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
      "International physical prospecting platform: event discovery and enrichment, calendar sync, CRM integration, automated follow‑ups, and ROI dashboard focused on in‑person interactions.",
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
      "Automation pipeline to create derivative products for each original artwork added to Shopify: dynamic descriptions and mockups, job queueing, and caching.",
    technologies: ["Express.js", "Redis", "Shopify GraphQL"],
    github: "https://github.com/julesdo",
    demo: "",
    image: require(".//../../public/projects/shopify-jobs.png"),
    available: false,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
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
