/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || ''; // 环境变量，如果没有则为空

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
  assetPrefix: basePath ? `/${basePath}` : '',
  basePath: basePath ? `/${basePath}` : '',
  output: 'export'
};

module.exports = nextConfig;
