/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ["aigeneratedimagestorage.blob.core.windows.net"],
  },
};

module.exports = nextConfig;
