/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",  // Scan all JS/JSX/TS/TSX files in src
    "./public/index.html"          // Include your HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

