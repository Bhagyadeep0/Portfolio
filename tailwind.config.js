/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{satoshi:['Satoshi', "serif"]},
      backgroundImage:{
        "hero1": "url(/src/assets/bg-1.svg)",
        "hero2": "url(/src/assets/bg-2.svg)",
        "blob1": "url(/src/assets/blob-1.svg)",
        "blob2": "url(/src/assets/blob-2.svg)",
        "circle-star": "url(/src/assets/circle-star.svg)",
        "layered-waves1": "url(/src/assets/layered-waves1.svg)",
      },
      keyframes: {
        bgAnim: {
          "0%": { backgroundImage: "url(/src/assets/blob-1.svg)", },
          "20%": { backgroundImage: "url(/src/assets/blob-2.svg)" },
          "50%": { backgroundImage: "url(/src/assets/blob-1.svg)" },
          "70%": { backgroundImage: "url(/src/assets/blob-2.svg)" },
          "100%": { backgroundImage: "url(/src/assets/blob-1.svg)" },
        },
      },
      animation: {
        "bg-anim": "bgAnim 10s linear infinite",
        "spin": "spin 10s linear infinite",
      },
      colors:{
        primary: "#212529",
        secondary: "#343a40",
        tertiary: "#495057",
        value4: "#6c757d",
        value5: "#adb5bd",
      }
    },
  },
  plugins: [],
};
