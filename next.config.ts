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
  // Note: eslint config removed in Next.js 16 - use ESLint directly
};

export default nextConfig;
