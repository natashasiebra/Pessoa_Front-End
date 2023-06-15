/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://localhost:3003/produtos',
          },
        ]
      },
}

module.exports = nextConfig
