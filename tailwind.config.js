/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        black: "#09050E",
        primaryPink: "#F3C5C5",
        secondaryPink: "#EF98A1",
        purple: "#D5D2FE",
        green: "#BFF0DB",
        primaryOrange: "#FAE0C1",
        secondaryOrange: "#F8B577",
        background: "#FBF8F6",
        secondaryBackground: "#F3EBE5",
      },
    },
  },
  plugins: [],
};
