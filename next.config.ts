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
      // RuneLite CDN — serves official OSRS item sprites by item ID
      // e.g. https://static.runelite.net/cache/item/icon/13265.png
      {
        protocol: "https",
        hostname: "static.runelite.net",
        pathname: "/cache/item/icon/**",
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
