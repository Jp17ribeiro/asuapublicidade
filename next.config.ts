import type { NextConfig } from "next";

const githubPages = process.env.BUILD_TARGET === "github-pages";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  ...(githubPages ? {
    output: "export" as const,
    basePath: "/asuapublicidade",
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;
