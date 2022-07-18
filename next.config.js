/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStringMode: true,
    images: {
        loader: "akamai",
        path: "",
    },
};

module.exports = nextConfig;