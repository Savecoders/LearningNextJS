/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['tmdb.org', 'themoviedb.org', 'ui-avatars.com', 'images.unsplash.com'],
    },
};

module.exports = nextConfig;
