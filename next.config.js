/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },      // don't fail builds on lint
  typescript: { ignoreBuildErrors: true },   // don't fail builds on TS
};
module.exports = nextConfig;
