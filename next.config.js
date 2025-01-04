/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  basePath: '/portofolio_2.0',
  assetPrefix: '/portofolio_2.0/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
}

module.exports = nextConfig
