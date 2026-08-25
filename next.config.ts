import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryBasePath = isGitHubActions ? "/portifolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: repositoryBasePath,
  assetPrefix: repositoryBasePath,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
