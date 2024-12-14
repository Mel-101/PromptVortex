/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B2C4A',
          light: '#2A4270',
          dark: '#0F1A2E',
        },
        secondary: {
          DEFAULT: '#C0C0C0',
          light: '#E8E8E8',
          dark: '#A0A0A0',
        },
        background: {
          primary: '#F8FAFC',
          secondary: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};