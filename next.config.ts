import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Suppress hydration warnings for browser extensions
  reactStrictMode: true,
};

export default nextConfig;
