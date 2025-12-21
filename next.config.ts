import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ["@uiw/react-codemirror"],
  },

  // Type checking during build
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default bundleAnalyzer(nextConfig);
