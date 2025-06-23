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
      {
        protocol: 'https',
        hostname: 'oxide-computer.imgix.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
