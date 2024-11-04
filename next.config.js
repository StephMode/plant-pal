/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: [
      "en.wikipedia.org",
      "upload.wikimedia.org",
      "images.unsplash.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
