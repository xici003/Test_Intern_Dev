import tailwindScrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        quickSan: ["Quicksand", "sans-serif"],
      },
      lineHeight: {
        18: "70px",
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};
