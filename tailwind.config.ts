import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: {
            50: "#FEF4F8",
            100: "#FCE3EE",
            200: "#F8C2DA",
            300: "#EE96BC",
            400: "#DD6E9E",
            500: "#C2578A", // primary — matches logo circle
            600: "#A24372",
            700: "#84345C",
            800: "#652740",
            900: "#3B1424",
          },
          gold: {
            100: "#FDF3D2",
            300: "#FBE28A",
            400: "#F8D34E",
            500: "#F4C21B", // matches "Bia" lettering
            600: "#D6A50E",
          },
          sky: {
            100: "#E4F6FC",
            300: "#A9E1F3",
            400: "#7ED2EC",
            500: "#5AC0E3", // matches shirt illustration
            600: "#369CC0",
          },
          cream: "#FFF8F1",
          ink: "#3A2130",
        },
      },
      fontFamily: {
        display: ["var(--font-baloo)", "system-ui", "sans-serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 24px -8px rgba(58, 33, 48, 0.18)",
        soft: "0 4px 14px -4px rgba(194, 87, 138, 0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "dot-divider":
          "linear-gradient(to right, transparent 0%, currentColor 15%, currentColor 85%, transparent 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
