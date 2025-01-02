/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      exclude: /node_modules/,
      use: "raw-loader",
    });

    return config;
  },
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/playground/' : '',
  basePath: isProd ? '/playground' : '',
  output: 'export'
};

module.exports = nextConfig;
