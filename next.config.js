/** @type {import('next').NextConfig} */
// const nextConfig = {}
// module.exports = nextConfig
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
    // next config
});

module.exports = nextConfig;
