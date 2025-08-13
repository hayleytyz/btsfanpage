/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // BTS Brand Colors
        'bts-purple': '#A349A4',
        'bts-pink': '#EC4899',
        'bts-magenta': '#FF00FF',
        'bts-lavender': '#E6D0EB',
        'bts-gold': '#FFD700',
        'bts-silver': '#C0C0C0',
        // Dark Theme
        'bts-dark': '#0F0F1A',
        'bts-dark-800': '#1A1A2E',
        'bts-dark-700': '#16213E',
        'bts-dark-600': '#2A2A4A',
        // Light Theme
        'bts-light': '#F8F9FF',
        'bts-light-200': '#E9ECF5',
        // Accents
        'bts-accent': '#6A0DAD',
        'bts-accent-light': '#9D4EDD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      boxShadow: {
        'bts': '0 0 25px rgba(163, 73, 164, 0.3)',
        'bts-lg': '0 0 35px rgba(163, 73, 164, 0.4)',
        'bts-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float 6s ease-in-out infinite reverse',
        'fade-in': 'fadeIn 0.5s ease-out',
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
