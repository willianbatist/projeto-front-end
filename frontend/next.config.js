/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { 
    appDir: true,
    optimizeCss: true, 
  },
  compiler: {
    styledComponents: {
      ssr: true
    }
  },
}

module.exports = nextConfig
