/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Optional: for static export if needed later
    images: {
        unoptimized: true, // For easier deployment if static
    }
};

module.exports = nextConfig;
