/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      colors: {
        bg: '#121315',
        surface: '#1a1c1f',
        elevated: '#22252a',
        gold: '#c4a574',
        bronze: '#a68b5b',
        ink: '#f5f3ef',
        muted: '#9b9590',
        border: '#33363b',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        dignified: 'cubic-bezier(0.77, 0, 0.175, 1)',
        strong: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
