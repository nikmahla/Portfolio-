/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all source files
  ],
  theme: {
    extend: {
      colors: {
        // custom dark shade for backgrounds
        zinc: {
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        sans: ["Rajdhani", "ui-sans-serif", "system-ui"], 
        heading: ["Rajdhani", "ui-sans-serif", "system-ui"], 
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
