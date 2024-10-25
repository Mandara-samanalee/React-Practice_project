/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          20: '#F1D0FE',
          30: '#f9e4ff',
          40: '#f7dcff',
          50: '#fcf4ff',
          100: '#f8e8ff',
          200: '#f1d0fe',
          300: '#e9abfc',
          400: '#dc79f9',
          500: '#ca46ef',
          600: '#b026d3',
          700: '#951caf',
          800: '#7b198f',
          900: '#681a75',
          950: '#43044e',
          960: '#742889'
        },
      },
    },
    plugins: [],
  }

}