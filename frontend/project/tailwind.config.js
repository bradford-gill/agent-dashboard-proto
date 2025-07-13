/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        background: '#121212',
        surface: '#1E1E1E',
        primary: '#0A84FF',
        secondary: '#30D158',
        'text-primary': '#F2F2F2',
        'text-secondary': '#A0A0A0',
        border: '#2C2C2E',
      },
      backgroundColor: {
        background: '#121212',
        surface: '#1E1E1E',
        primary: '#0A84FF',
        secondary: '#30D158',
      },
      textColor: {
        'text-primary': '#F2F2F2',
        'text-secondary': '#A0A0A0',
        primary: '#0A84FF',
        secondary: '#30D158',
      },
      borderColor: {
        border: '#2C2C2E',
        primary: '#0A84FF',
        secondary: '#30D158',
      },
    },
  },
  plugins: [],
};
