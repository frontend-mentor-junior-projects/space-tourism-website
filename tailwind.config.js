/** @type {import('tailwindcss').Config} */
export default {
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-100': '#D0D6F9',
				'primary-200': '#0B0D17',
				white: '#FFFFFF',
				divider: '#383B4B',
				'navigation-menu': 'rgba(255, 255, 255, 0.05)',
				'explore-button': 'rgba(255, 255, 255, 0.1)',
			},
			fontFamily: {
				sans: ['Barlow', 'sans-serif'],
				'sans-cond': ['Barlow Condensed', 'sans-serif'],
				serif: ['Bellefair', 'serif'],
			},
			fontSize: {
				/* 14px */
				100: '0.875rem',
				/* 15px */
				200: '0.9375rem',
				/* 16px */
				300: '1rem',
				/* 18px */
				400: '1.125rem',
				/* 24 px */
				500: '1.5rem',
				/* 28 px */
				600: '1.75rem',
				/* 32 px */
				700: '2rem',
				/* 56 px */
				800: '3.5rem',
				/* 80 px */
				900: '5rem',
				/* 150 px */
				1000: '9.375rem',
			},
			letterSpacing: {
				sm: '2.5px',
				lg: '4.5px',
			},
			width: {
				'body-sm': '327px',
				'body-md': '444px',
				'body-lg': '573px',
			},
			gridTemplateColumns: {
				'technology-page-layout':
					'minmax(48px, 1fr) minmax(0, 50rem) minmax(0, 22rem) minmax(48px, 1fr)',
			},
			gridTemplateAreas: {
				/* Technology page */
				'technology-page-desktop': [
					'. page-title page-title .',
					'. content image image',
					'. content image image',
				],
				'technology-page-mobile': ['page-title', 'image', 'content'],
				/* Crew page */
				'crew-page-desktop': [
					'page-title page-title',
					'content    image',
					'tabs       image',
				],
				'crew-page-tablet': ['page-title', 'content', 'tabs', 'image'],
				'crew-page-mobile': ['page-title', 'image', 'tabs', 'content'],
			},
			backgroundImage: {
				/* Home page */
				'home-page-mobile': "url('/assets/home/background-home-mobile.jpg')",
				'home-page-tablet': "url('/assets/home/background-home-tablet.jpg')",
				'home-page-desktop': "url('/assets/home/background-home-desktop.jpg')",
				/* Destination page */
				'destination-page-mobile':
					"url('/assets/destination/background-destination-mobile.jpg')",
				'destination-page-tablet':
					"url('/assets/destination/background-destination-tablet.jpg')",
				'destination-page-desktop':
					"url('/assets/destination/background-destination-desktop.jpg')",
				/* Crew page */
				'crew-page-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
				'crew-page-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
				'crew-page-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
				/* Technology page */
				'technology-page-mobile':
					"url('/assets/technology/background-technology-mobile.jpg')",
				'technology-page-tablet':
					"url('/assets/technology/background-technology-tablet.jpg')",
				'technology-page-desktop':
					"url('/assets/technology/background-technology-desktop.jpg')",
			},
		},
	},
	// eslint-disable-next-line global-require
	plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}
