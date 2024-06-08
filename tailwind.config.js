/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, rgba(12,46,83,1) 0%, rgba(72,102,153,1) 100%)",
      },
      colors: {
        blue: {
          DEFAULT: "#116ACC",
          light: "#116ACC",
          dark: "#116ACC",
        },
        red: {
          DEFAULT: "#FD4E5D",
          light: "#FD4E5D",
          dark: "#FD4E5D",
        },
      },
    },
  },
  plugins: [],
};
