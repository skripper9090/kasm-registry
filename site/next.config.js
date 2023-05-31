/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm WorkSpaces Registry',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://kodestar.github.io/kasm-registry/1.0/icon.png',
    listUrl: 'https://skripper9090.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
