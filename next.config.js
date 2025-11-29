const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add necessary remote patterns if using external images for Contentlayer
    ],
  },
  // Ensure we use the src directory
  experimental: {
    appDir: true,
    serverActions: true,
    outputFileTracingExcludes: {
      '*': ['@swc/core'],
    },
  },
  output: 'standalone', // Optimized for Vercel deployment
};

module.exports = withContentlayer(nextConfig);