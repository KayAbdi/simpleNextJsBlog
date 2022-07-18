/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStringMode: true,
    images: {
        loader: "akamai",
        path: "",
    },
    basePath: "/nextjs-pages",
    assetPrefix: "/nextjs-pages",
};

module.exports = nextConfig;