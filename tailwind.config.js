/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Merriweather": ["Merriweather", 'sans-serif'],
       "Anton": ["Anton" ,'sans-serif'],
        
      }
    },
  },
  plugins: [],
}