const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Set your caching headers for server-side rendered pages
    cacheControl: 's-maxage=60, stale-while-revalidate=86400',
  },
  publicRuntimeConfig: {
    // Set your caching headers for client-side rendered pages
    cacheControl: 'public, max-age=60, stale-while-revalidate=86400',
  },
  webpack: (config, { isServer }) => {
    // Enable TerserPlugin for JS minification
    config.optimization.minimizer.push(
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.* statements
          },
        },
      })
    );

    // Enable CompressionPlugin for gzip compression
    if (!isServer) {
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css)$/, // Compress JS and CSS files
          threshold: 10240, // Only compress files larger than 10KB
          minRatio: 0.8, // Only compress files with compression ratio > 0.8
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
