import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://raw.githubusercontent.com/j0h-dev/**'),
      new URL('https://media.githubusercontent.com/media/j0h-dev/**'),
    ],
  },
}

export default nextConfig
