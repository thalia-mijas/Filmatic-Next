/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL("https://image.tmdb.org/t/p/w500/**")], // <== Domain name
  },
};

export default nextConfig;
