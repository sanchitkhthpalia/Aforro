/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5d5fef',
        secondary: '#ef5da8',
        background: '#f8f9ff',
      }
    },
  },
  plugins: [],
}
