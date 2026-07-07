import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // update this when importing image from remote url to improve safety and ba  as specific as possible
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
