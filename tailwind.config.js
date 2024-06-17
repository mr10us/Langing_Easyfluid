/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        head: "1024px"
      },
      fontFamily: {
        inter: "var(--inter-font)",
        heebo: "var(--heebo-font)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, rgba(12,46,83,1) 0%, rgba(72,102,153,1) 100%)",
        "scenatio-gradient":
          "linear-gradient(90deg, rgba(239,246,255,1) 0%, rgba(248,248,248,1) 100%)",
        "tedious-gradient":
          "linear-gradient(90deg, rgba(248,248,248,1) 0%, rgba(238,238,238,1) 100%)",
        "bd-gradient":
          "linear-gradient(90deg, rgba(200,226,255,1) 0%, rgba(248,248,248,1) 100%)",
        "demo-gradient":
          "linear-gradient(270deg, rgba(200,226,255,1) 0%, rgba(248,248,248,1) 100%)",
      },
      colors: {
        blue: {
          DEFAULT: "#116ACC",
          light: "#2d85e7",
          dark: "#0856ac",
        },
        red: {
          DEFAULT: "#FD4E5D",
          light: "#FD4E5D",
          dark: "#FD4E5D",
        },
        green: {
          DEFAULT: "#16A34A",
          light: "#16A34A",
          dark: "#16A34A",
        },
        gray: {
          DEFAULT: "#424242",
          light: "#555",
          dark: "#030712",
        },
      },
    },
  },
  plugins: [],
};
