/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
