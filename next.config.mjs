import { join } from 'path';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com']
  }
};

export default nextConfig;
