/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["project-images-development.s3.me-central-1.amazonaws.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;
