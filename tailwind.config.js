
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				'gradient-x': {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
				},
				glow: {
					'0%, 100%': { filter: 'drop-shadow(0 0 32px #2563eb55) drop-shadow(0 0 64px #ec489955)' },
					'50%': { filter: 'drop-shadow(0 0 48px #2563ebaa) drop-shadow(0 0 96px #ec4899aa)' },
				},
			},
			animation: {
				'gradient-x': 'gradient-x 6s ease-in-out infinite',
				glow: 'glow 2.5s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
