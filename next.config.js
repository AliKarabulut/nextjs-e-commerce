/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  async redirects(){
    return [
      {
      source: '/login' || '/register' || '/forgotpassword',
      has: [
        {
          type: 'cookie',
          key: 'token',
        }
      ],
      permanent: false,
      destination: '/'
    }
  ]
  }
}

module.exports = nextConfig
