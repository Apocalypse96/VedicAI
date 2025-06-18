/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    // Add cloud storage domains when integrated
    // domains: ['your-alibaba-oss-domain.com', 'your-aws-s3-domain.com'],
  },
  // Enable server components
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;