/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // Allow 127.0.0.1 to access Next.js dev resources (webpack HMR) during development
  allowedDevOrigins: ['127.0.0.1'],
    images: {
    remotePatterns: [new URL('https://cdn-images-1.medium.com/**')],
  },
};

export default nextConfig;
