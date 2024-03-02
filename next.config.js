/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'restaurant-api.dicoding.dev',
        port: '',
        //pathname: '/images/small/**',
      },
    ],
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
