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

module.exports = nextConfig;
