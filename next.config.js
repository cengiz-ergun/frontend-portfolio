/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["localhost", "uploadthing.com"], // <== Domain name
    },
}

module.exports = nextConfig
