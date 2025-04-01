import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // desabilita PWA em dev
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // ...existing config options...
};

module.exports = withPWA(nextConfig);
export default nextConfig;