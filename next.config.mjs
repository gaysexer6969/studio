/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exports for gh-pages
  basePath: process.env.NODE_ENV === 'production' ? '/nilayshenai' : '', // Adjust basePath for gh-pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nilayshenai/' : '', // Adjust assetPrefix for gh-pages
  images: {
     unoptimized: true // Required for static export with next/image
  }
};

export default nextConfig;
