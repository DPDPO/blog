/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  // distDir: "build",
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
