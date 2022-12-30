/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				theme: {
					dark: "#1E2E4D",
					orange: "#FCAB32",
					shadow: "#14223E",
				},
			},
			keyframes: {
				float: {
					"0%": { transform: "translate(0,  0px)" },
					"50%": { transform: "translate(0, 15px)" },
					"100%": { transform: "translate(0, -0px)" },
				},
			},
			animation: {
				float: "float 8s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
