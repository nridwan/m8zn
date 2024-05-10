/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			flex: {
				'full': '1 1 100%'
			}	  
		},
	},
	plugins: [
		require('daisyui'),
		require('tailwind-scrollbar'),
		require('@tailwindcss/typography'),
	],
	daisyui: {
		themes: ["dracula", "winter"],
	},
}
