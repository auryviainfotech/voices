/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: undefined,
  basePath: '',
  distDir: 'out',
  allowedDevOrigins: [
    'http://192.168.0.145:3003'
  ]
}

module.exports = nextConfig
