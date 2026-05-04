import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
