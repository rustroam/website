import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    useCache: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.facepunch.com",
        port: "",
        pathname: "/rust/map-images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
