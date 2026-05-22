import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://3elegant-backend.up.railway.app/:path*",
      },
    ];
  },
};

export default nextConfig;
