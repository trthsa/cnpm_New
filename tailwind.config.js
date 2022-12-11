/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#F6B258",
      },
    },
  },
  plugins: [],
};
// git config --global user.email "trthsan@gmail.com"
// git config --global user.name "Your Name"
