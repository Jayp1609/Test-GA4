/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/productlist",
        destination: "/",
        permanent: false,
      },
      // {
      //   source: "/productserver",
      //   destination: "/",
      //   permanent: false,
      // },
      //{
      //  source: "/product/:productid",
      // destination: "/",
      // permanent: false,
      // }
    ];
  },
  images: {
    domains: ["images.pexels.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://test-ga-4.vercel.app",
      },
    ];
  },
  // output: "export",
};
module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: "/(.*)?",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              'geolocation=(self "https://test-ga-4.vercel.app"), camera=()',
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};
