/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  basePath: '/portofolio_2.0',
  assetPrefix: '/portofolio_2.0/',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
