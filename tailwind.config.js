module.exports = {
	content: ['index.html', './style.css'],
	theme: {
		extend: {
			boxShadow: {
				cart: ['0 1rem 2.5rem -1.5rem', '0 .5rem 20px -15px '],
			},
			fontFamily: {
				sans: ['Kumh Sans', 'Segoe UI', 'sans-serif'],
			},
			colors: {
				orange: 'hsl(26, 100%, 55%)',
				'pale-orange': 'hsl(25, 100%, 94%)',
				'very-dark-blue': 'hsl(220, 13%, 13%)',
				'dark-grayish-blue': 'hsl(219, 9%, 45%)',
				'grayish-blue': 'hsl(220, 14%, 75%)',
				'light-grayish-blue': 'hsl(223, 64%, 98%)',
			},
		},
	},
	plugins: [],
}
