/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com", "raw.githubusercontent.com", "images.pexels.com"],
  },
  fontLoaders: [
    {
      loader: "@next/font/google",
      options: {
        subsets: ["latin"],
        weight: ["400", "500", "600", "700", "800"],
      },
    },
  ],
};

// Wrap with Contentlayer if available to enable MD/MDX content sourcing
let withContentlayer = (config) => config;
try {
  withContentlayer = require("next-contentlayer").withContentlayer;
} catch (_) {}

module.exports = withContentlayer(nextConfig);
