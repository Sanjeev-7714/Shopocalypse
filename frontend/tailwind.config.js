/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-lg': {'min': '390px', 'max': '428px'}, // 6.1-6.7 inch mobile screens
      },
    },
  },
  plugins: [],
}