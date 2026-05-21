import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Moved from experimental.serverComponentsExternalPackages in Next.js 15+
  serverExternalPackages: ["@prisma/client", "bcryptjs"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oldschool.runescape.wiki",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "chisel.weirdgloop.org",
        pathname: "/**",
      },
    ],
  },

  turbopack: {
    // Silence the "multiple lockfiles" warning when cloglog sits inside a
    // parent directory that already has a package-lock.json
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
