/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["project-images-development.s3.me-central-1.amazonaws.com"],
  },
  webpack(config, { isServer }) {
    // Remove existing SVG rule to prevent conflicts
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes("svg")) {
        rule.exclude = /\.svg$/i;
      }
    });

    // Add custom loader for SVG as React component (optional)
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"], // Allows: import Logo from './logo.svg'
    });

    return config;
  },
};

export default nextConfig;
