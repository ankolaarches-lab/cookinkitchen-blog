import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/reviews/best-blenders',
        destination: '/reviews/best-blenders-2026',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;