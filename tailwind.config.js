/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",  // Scan all JS/JSX/TS/TSX files in src
    "./public/index.html"          // Include your HTML file
  ],
  theme: {
    extend: {
       colors: {
        'dark-brown-grey': '#09090b', // You can adjust this hex code to get the exact shade you want
      },
      backgroundColor: {
        'dark': '#09090b', // This will be used when you apply 'dark:bg-dark'
      },
      textColor: {
        'dark': '#09090b', // This will be used when you apply 'dark:text-dark'
      },
    },
  },
  plugins: [],
}

