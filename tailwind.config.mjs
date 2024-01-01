/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
			},
			colors: {
				primary: '#111729',
				secondary: '#677489',
				background: '#F2F5F9',
			}				
		},
	},
	plugins: [],
}
