import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oxide.computer',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;
