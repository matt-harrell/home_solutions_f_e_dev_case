/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd126ytvel6227q.cloudfront.net',
            port: '',
            pathname: '/logos/**',
          },
        ],
      },
};

export default nextConfig;
