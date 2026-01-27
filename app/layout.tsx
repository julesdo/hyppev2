import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jules-Camille | Senior Product Engineer & AI Architect",
  description:
    "Expert Next.js 16 & AI-Native Architectures. Je conçois des systèmes scalables et des moteurs de recherche hybrides. Ex-Coyote Group.",
  generator: "Next.js",
  applicationName: "Hyppe",
  keywords: [
    "product engineer",
    "ai architect",
    "next.js",
    "nestjs",
    "vector database",
    "rag pipelines",
    "pinecone",
    "convex",
    "domain-driven design",
    "performance engineering",
    "typescript",
    "react",
    "node.js",
    "ai-native",
    "scalable systems",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Jules-Camille | Senior Product Engineer & AI Architect",
    description:
      "Expert Next.js 16 & AI-Native Architectures. Je conçois des systèmes scalables et des moteurs de recherche hybrides. Ex-Coyote Group.",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Jules-Camille | Senior Product Engineer & AI Architect",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jules-Camille | Senior Product Engineer & AI Architect",
    description:
      "Expert Next.js 16 & AI-Native Architectures. Systèmes scalables et moteurs de recherche hybrides. Ex-Coyote Group.",
    images: [
      "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
