import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_APP_NAME: "HermesProtocol",
    NEXT_PUBLIC_APP_URL: "https://hermesprotocol.vercel.app",
  },
};

export default nextConfig;
