/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["project-images-development.s3.me-central-1.amazonaws.com"],
  },
  webpack(config, { isServer }) {
    // Fix asset path resolution
    config.module.rules.push({
      test: /\.(svg)$/i,
      type: "asset",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    return config;
  },
};

export default nextConfig;
