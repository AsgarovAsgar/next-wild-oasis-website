/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iroivpqgotnwcsjscmxs.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**'
      }
    ]
  },
  output: 'export'
}

export default nextConfig
