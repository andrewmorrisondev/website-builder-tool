const nextConfig = {
  reactStrictMode: true,
  experimental: {}, // Clean experimental options for now
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
