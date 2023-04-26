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
};

module.exports = nextConfig
