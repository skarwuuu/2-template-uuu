import type { NextConfig as _NextConfig } from "next";

interface ExtendedNextConfig extends _NextConfig {
  eslint?: {
    ignoreDuringBuilds: boolean;
  };
}

const nextConfig: ExtendedNextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
