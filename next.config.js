/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-tau-taupe-50.vercel.app",
      },
    ],
  },
};

export default nextConfig;