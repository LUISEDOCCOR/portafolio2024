/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cBlack: "#151515",
				shiny: "#7037cd"
			}
		},
	},
	plugins: [],
}
