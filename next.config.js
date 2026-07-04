/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tells Next.js to build a static HTML export
  output: 'export',
  
  // Disables the default image optimization API which relies on a Node.js server
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
