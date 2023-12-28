/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@platform/web-components"],
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
