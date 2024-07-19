/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        // Optionally, you can add pathname: '/path/to/images/*' for more specific patterns
      },
    ],
  },
};

export default nextConfig;
