/** @type {import('next').NextConfig} */
const nextConfig = {
    output : "export",
    images : {
        domains: ['images.unsplash.com'],
        unoptimized: true,
    }
};

export default nextConfig;
