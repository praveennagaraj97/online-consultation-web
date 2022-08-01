module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './layout/**/*.{js,jsx,ts,tsx}',
    './views/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Louis-George-Café': ['Louis George Café', 'sans-serif'],
      },
      colors: {
        'blue-zodiac': '#102A4B',
        razzmatazz: '#e3136e',
        'midnight-blue': '#02203B',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out 1',
        'wiggle-infinite': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
