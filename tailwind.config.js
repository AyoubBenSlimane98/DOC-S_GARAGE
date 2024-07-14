/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red-color': '#D72222',
        'white-color': '#FFF',
        'black-color': '#111111',
        'light-color': '#F2F2F2',
        'light-second-color': '#FFFFFF',
        'text-color': '#444444',
        'light-second': '#F9F9F9',
        'light-dark': '#DEDEDE',
        'gray-text-second': '#999999',
        'bg-color': '#DEDEDE',
        'global': '#F9F7F5',
      },
    },
  },
  plugins: [],
};

