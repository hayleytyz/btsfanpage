/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using standard Tailwind colors instead of custom ones
        'bts-purple': '#9333ea',  // purple-600
        'bts-pink': '#ec4899',    // pink-500
        'bts-magenta': '#e879f9', // fuchsia-400
        'bts-lavender': '#e9d5ff', // purple-200
        'bts-gold': '#f59e0b',    // amber-500
        'bts-silver': '#9ca3af',  // gray-400
        // Dark Theme
        'bts-dark': '#111827',    // gray-900
        'bts-dark-800': '#1f2937', // gray-800
        'bts-dark-700': '#374151', // gray-700
        'bts-dark-600': '#4b5563', // gray-600
        // Light Theme
        'bts-light': '#ffffff',   // white
        'bts-light-100': '#f9fafb', // gray-50
        'bts-light-200': '#f3f4f6', // gray-100
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      backgroundImage: {
        'gradient-bts': 'linear-gradient(135deg, #A349A4 0%, #EC4899 50%, #FFD700 100%)',
        'gradient-bts-hover': 'linear-gradient(135deg, #8E3A8E 0%, #D63D7C 50%, #E6C200 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
