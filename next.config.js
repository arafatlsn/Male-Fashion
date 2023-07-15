/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["i.postimg.cc", "i.ibb.co"]
  }
}

module.exports = nextConfig
