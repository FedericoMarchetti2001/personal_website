const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add necessary remote patterns if using external images for Contentlayer
    ],
  },
  // Turbopack configuration for Next.js 16
  turbopack: {},
  outputFileTracingExcludes: {
    '*': ['@swc/core'],
  },
  output: 'standalone', // Optimized for Vercel deployment
};

module.exports = withContentlayer(nextConfig);