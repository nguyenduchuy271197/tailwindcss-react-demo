/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "300px auto",
      },
      gridTemplateCols: {
        layout: "5rem auto",
      },
    },
  },
  plugins: [],
};
