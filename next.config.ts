import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http", // Or "https" if your production is using HTTPS
        hostname: "192.168.*.*",
        port: "8000",  // Port is optional if you're using default ports
        pathname: "/public/avatars/**", // Ensure it's specific to avatars folder
      },
      {
        protocol: "http", // Or "https" if your production is using HTTPS
        hostname: "localhost",
        port: "8000",  // Port is optional if you're using default ports
        pathname: "/public/avatars/**", // Ensure it's specific to avatars folder
      },
    ],
    domains: ["*"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
