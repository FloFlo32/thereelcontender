import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
    preloadEntriesOnStart: false,
  },
  images: {
    qualities: [70, 75, 78, 80],
  },
};

export default nextConfig;
