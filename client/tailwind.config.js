/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orangePrimary: "#FC4B20",
        orangeDarker: "#DE340B",
        orangeLighter: "#FF5F38",
        whitePrimary: "#D9D9D9",
        whiteDarker: "#EAEAEA",
        whiteLighter: "#CFCFCF",
        blackPrimary: "#111111",
        blackDarker: "#171717",
        blackLighter: "#0F0F0F",
      },
      fontSize: {
        20: "20px",
        32: "32px",
        40: "40px",
        64: "64px",
        96: "96px",
      },
      gap: {
        30: "30px",
        50: "50px",
      },
      fontFamily: {
        franklin: "Franklin",
        franklinBold: "FranklinBold",
      },
      spacing: {
        30: "30px",
        50: "50px",
      },
      borderRadius: {
        25: "25px",
        40: "40px",
      },
    },
  },
  plugins: [],
};
