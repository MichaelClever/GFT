import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Required for GitHub Pages deployment under a repository name
    basePath: isProd ? '/GFT' : '',
    assetPrefix: isProd ? '/GFT/' : '',
};

export default nextConfig;
