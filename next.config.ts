import type { NextConfig } from "next";

// We enforce the GitHub Pages basePath locally as well
// so that local development exactly mirrors production URLs without broken images
const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/GFT',
};

export default nextConfig;
