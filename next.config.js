/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Unoptimized images for export mode
  },
}

module.exports = nextConfig;
