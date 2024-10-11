/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#202224',
        'background-color': '#F4F5F9',
        "hover-color" : '#4880FF',
        "chart-color": "#4880FF",
        "border-color": "#E0E0E0",
      }
      
    },
  },
  plugins: [],
}

