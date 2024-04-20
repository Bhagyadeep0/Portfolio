/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //custom fonts
      fontFamily:{satoshi:['Satoshi', "serif"]},
      //bg added
      backgroundImage:{
        "pic": "url(/pic.jpg)",
        "circle-star": "url(/src/assets/circle-star.svg)",
        "layered-waves1": "url(/src/assets/layered-waves1.svg)",
      },
      //frames added
      keyframes: {
        morphAnim:{
          "0%":{borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%":{borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%":{borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
      },
      //animation added
      animation: {
        "spin": "spin 10s linear infinite",
        "morphAnim": "morphAnim 8s ease-in-out infinite 1s",
      },
      //custom colors
      colors:{
        primary: "#212529",
        secondary: "#343a40",
        tertiary: "#495057",
        value4: "#6c757d",
        value5: "#adb5bd",
      },
      //custom box shadow
      boxShadow: {
        'inset': 'inset 0 0 0 9px rgb(255 255 255 / 30%), 15px 25px 20px rgba(0,0,0,.1), 15px 20px 20px rgba(0,0,0,0.05);',
      }
    },
  },
  plugins: [],
};
