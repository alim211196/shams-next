/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "project-images-development.s3.me-central-1.amazonaws.com",
      "lms-shams.netlify.app",
    ],
    unoptimized: false, // Keep image optimization unless overriding
  },

  webpack(config, { isServer }) {
    // Fix asset path resolution
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: "asset",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    return config;
  },
};

export default nextConfig;
