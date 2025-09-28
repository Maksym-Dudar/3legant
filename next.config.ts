import type { NextConfig } from "next";
const withSvgr = require("next-svgr");

const nextConfig: NextConfig = {
};

module.exports = withSvgr({
  webpack(config: any, options: any) {
	return config;
  },
});


export default nextConfig;
