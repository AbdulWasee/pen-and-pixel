/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Load web fonts via <link> at runtime instead of inlining them at build
  // time — keeps builds self-contained and avoids a build-time fetch to
  // Google's font CDN. (Fonts still load normally in the browser.)
  optimizeFonts: false,
};
export default nextConfig;
