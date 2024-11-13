/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
  
        },   {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
  
        }
    ],
}, eslint: {
    // This disables linting during `next build` and `next start`
    ignoreDuringBuilds: true,
  },};



export default nextConfig;
