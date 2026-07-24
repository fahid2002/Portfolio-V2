/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-tau-taupe-50.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;