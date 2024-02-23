/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["dist/index.html"],
  content: ["./dist/**/*.{html,js}"],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          50: "#EAF6FF",
          100: "#B6DFFF",
          200: "#7BBCF6",
          300: "#4698E8",
          400: "#2E7ED7",
          500: "#1E68C0",
          600: "#1556A3",
          700: "#0D4685",
          800: "#07345F",
          900: "#001F35",
        },
      },
    },
  },
  plugins: [],
};
