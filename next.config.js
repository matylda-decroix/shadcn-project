/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly",
        port: "",
        pathname: "/fcc-running-cats",
      },
    ],
  },
};

module.exports = nextConfig;
