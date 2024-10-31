/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["index.css",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
  	extend: {
  		backgroundImage: {
  			noise: 'url('/src/assets/nnnoise.svg')',
  			undulate: 'url('/src/assets/uuundulate.svg')'
  		},
  		fontFamily: {
  			inconsolata: ['Inconsolata', 'monospace'],
  			italiana: ['Italiana', 'serif'],
  			hubballi: ['Hubballi', 'cursive'],
  			julius: ['Julius Sans One"', 'sans-serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

