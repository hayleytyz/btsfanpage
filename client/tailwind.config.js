/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bts': {
          'pink': '#FFD1DC',
          'purple': '#C4A1FF',
          'blue': '#A7C7E7',
          'mint': '#B5EAD7',
          'yellow': '#FFE45E',
          'dark': '#1A1A2E',
          'light': '#F8F9FA',
        },
      },
      fontFamily: {
        'sans': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'serif': ['SF Pro Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
