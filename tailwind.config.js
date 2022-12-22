/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sky: "url(../public/sky.jpg)",
      },
    },
  },
  plugins: [],
};
