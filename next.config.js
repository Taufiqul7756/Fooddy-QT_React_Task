/** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10",
      },
    ];
  },
};
