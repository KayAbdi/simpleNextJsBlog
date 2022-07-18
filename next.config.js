/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStringMode: true,
    images: {
        loader: "akamai",
        path: "",
    },
    basePath: "/simpleNextJsBlog",
    assetPrefix: "/simpleNextJsBlog",
};

module.exports = nextConfig;