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
  title: "Hyppe — Fast websites and smart automations",
  description:
    "Hyppe builds fast, elegant websites and automated workflows so you can focus on your core business. Next.js, Shopify (headless), Ghost CMS, n8n, Convex.dev.",
  generator: "Next.js",
  applicationName: "Hyppe",
  keywords: [
    "hyppe",
    "web studio",
    "next.js",
    "react",
    "automation",
    "shopify headless",
    "ghost cms",
    "n8n",
    "convex.dev",
    "trigger.dev",
    "landing pages",
    "headless commerce",
    "workflows",
    "seo",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Hyppe — Fast websites and smart automations",
    description:
      "Hyppe builds fast, elegant websites and automated workflows for founders and teams. Websites that convert, operations that scale.",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Hyppe — Fast websites and automations",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyppe — Fast websites and smart automations",
    description:
      "Fast websites + automations: Next.js, Shopify headless, Ghost CMS, n8n, Convex.dev.",
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
