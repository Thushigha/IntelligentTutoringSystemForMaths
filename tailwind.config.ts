import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matBlack: "#020512",
        pureWhite: "#FFFFFF",
        textGray: "#2B2B2B",
        lightGray: "#7A7A7A",
        themeBlue: "#0C2561",
        themeRed: "#920106",
        themeGreen: "#32C2C1",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        poppinsMedium: ["PoppinsMedium", "serif"],
        poppinsSemiBold: ["PoppinsSemiBold", "serif"],
        poppinsBold: ["PoppinsBold", "serif"],
      },
      fontSize: {
        // h1: "36px",
        // h2: "28px",
        // h3: "24px",
        // h4: "20px",
        // h5: "18px",
        // p1: "16px",
        // p2: "14px",
        // p3: "12px",
        // p4: "11px",
        // p5: "9px",

        h1: "36px",
        h2: "28px",
        h3: "24px",
        h4: "18px",
        h5: "16px",
        p1: "14px",
        p2: "12px",
        p3: "11px",
        p4: "10px",
        p5: "9px",
      },
    },
  },
  plugins: [],
};
export default config;
