import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Commented out - no longer using oxide domains
      // {
      //   protocol: 'https',
      //   hostname: 'oxide.computer',
      //   port: '',
      //   pathname: '/img/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'oxide-computer.imgix.net',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
