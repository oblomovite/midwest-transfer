/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5A5F',
        secondary: '#007A87',
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      // Add more theme customizations as needed
    },
  },
  plugins: [],
}