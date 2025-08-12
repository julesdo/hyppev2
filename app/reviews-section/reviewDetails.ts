import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Aqui Media",
    role: "Publisher",
    company: "Regional Media Group",
    profileImg: alex,
    testimonial:
      "Hyppe delivered a fast Next.js site and automated our editorial flow. We ship faster, with less manual work, and better analytics.",
  },
  {
    name: "Source Private Asset",
    role: "Investment Fund",
    company: "Asset Management",
    profileImg: jerry,
    testimonial:
      "Site redesign + automated reporting saved our team hours each week and improved investor communications.",
  },
  {
    name: "Anne Mondy",
    role: "Artist",
    company: "Headless Shopify",
    profileImg: mauro,
    testimonial:
      "The headless storefront is fast and the automated back‑office keeps orders and inventory in sync without effort.",
  },
  {
    name: "Fractional CTO",
    role: "Aqui Media",
    company: "Operations",
    profileImg: umar,
    testimonial:
      "Hyppe ensures performance and scalability while automating the busywork end‑to‑end.",
  },
  {
    name: "Operations Lead",
    role: "E‑commerce",
    company: "Retail",
    profileImg: olamide,
    testimonial:
      "Automations reduced manual tasks across CRM and logistics. Our team finally focuses on growth.",
  },
  {
    name: "Founder",
    role: "SaaS",
    company: "Early‑stage",
    profileImg: alan,
    testimonial:
      "Clear roadmap, fast delivery, measurable conversion lift. Hyppe was the right partner for speed and quality.",
  },
  
];
