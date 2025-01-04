/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  basePath: '/portofolio_2.0',
  assetPrefix: '/portofolio_2.0/',
  rules: {
    quotes: ["error", "single"], // Use single quotes
    indent: ["error", 2], // Enforce 2 spaces for indentation
    semi: ["error", "always"], // Require semicolons
  },
}

module.exports = nextConfig
