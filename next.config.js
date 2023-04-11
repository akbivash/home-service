/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"]
   },
   typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
