/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  basePath: '/portofolio_2.0',
  assetPrefix: '/portofolio_2.0/',
  rules: {
    // Disable specific rules
    quotes: "off", // Disable enforcement of single/double quotes
    indent: "off", // Disable indentation rules
    semi: "off", // Disable semicolon rules

    // Or, you can relax the rule level
    quotes: ["warn", "single"], // Warn instead of error for quotes
  },
}

module.exports = nextConfig
