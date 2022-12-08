/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				theme: {
					dark: "#1E2E4D",
					orange: "#FCAB32",
					shadow: "#14223E"
				},
			},
		},
	},
	plugins: [],
};
