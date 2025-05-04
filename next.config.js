/** @type {import('next').NextConfig} */

// Determine basePath based on environment
const isProd = process.env.NODE_ENV === 'production';
// Assuming your repository name is 'nilayshenai', adjust if different.
const repoName = 'nilayshenai';
const basePath = isProd ? `/${repoName}` : '';

const nextConfig = {
  // Configure static export for deployment to GitHub Pages
  output: 'export',

  // Set basePath for routing within the subdirectory on GitHub Pages
  basePath: basePath,

  // Set assetPrefix for static assets (CSS, JS, images) to load correctly from the subdirectory
  assetPrefix: basePath,

  // Optional: Disable image optimization if using static export with default loader
  // (GitHub Pages doesn't support Next.js Image Optimization API)
  images: {
    unoptimized: true,
  },

  // Optional: Enable trailing slash if needed, though usually not required with static export
  // trailingSlash: true,

  // Optional: Handle rewrites or redirects if necessary (less common for static exports)
  // async rewrites() {
  //   return [];
  // },
  // async redirects() {
  //   return [];
  // },

  // Ensure experimental features match your project needs, if any
  // experimental: {},
};

module.exports = nextConfig;
