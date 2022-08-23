/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["pbs.twimg.com"],
  },
};

module.exports = withContentlayer(nextConfig);
