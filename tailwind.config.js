/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'sans-serif'],
        jetBrains: ['JetBrains Mono', 'sans-serif']
      },
    },
  },
  plugins: [],
}