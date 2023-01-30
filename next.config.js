/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: "/api/:slug*",
				destination: "http://0.0.0.0:2000/api/2023/:slug*",
			},
		];
	},
};
