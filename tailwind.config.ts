import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        pretendard: ["var(--font-pretendard)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        reenie: ["var(--font-reeniebeanie)", "cursive"],
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: " 1", transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 300ms ease-in-out",
        slideOut: "slideOut 300ms ease-in-out",
      },
      boxShadow: {
        custom: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
