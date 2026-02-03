/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "out",
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "",
    assetPrefix: "./",
    trailingSlash: true,
}

export default nextConfig
