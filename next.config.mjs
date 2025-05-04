/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exports
  // basePath: '/nilayshenai', // Set this if your site is deployed under a subdirectory on GitHub Pages
  // assetPrefix: '/nilayshenai/', // Optional: Set this if assets are served from a different path
  images: {
    unoptimized: true, // Disable Next.js Image Optimization API (required for static export)
  },
  reactStrictMode: true,
};

export default nextConfig;
