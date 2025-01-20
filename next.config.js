/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['oqymtqolwjujkayjyxdt.supabase.co'],
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
  output: 'export',  // Changed from 'standalone' to 'export' for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@svgr/webpack',
          options: { babel: false },
        },
      ],
    });

    // Add Phaser specific configuration
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
}

module.exports = nextConfig