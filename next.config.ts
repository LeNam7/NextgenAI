import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/NextgenAI",
  assetPrefix: "/NextgenAI/",
};

export default nextConfig;
