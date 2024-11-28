import type {Config} from "tailwindcss";

export default {
  darkMode: ["selector", "class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "hsla(26, 100%, 50%, 1)",
          "500": "hsla(26, 100%, 95%, 1)",
        },

        dark: {
          "100": "hsla(0, 0%, 0%, 1)",
          "200": "hsla(225, 21%, 7%, 1)",
          "300": "hsla(223, 22%, 11%, 1)",
          "400": "hsla(223, 22%, 17%, 1)",
          "500": "hsla(229, 14%, 29%, 1)",
        },
        light: {
          "400": "hsla(227, 20%, 60%, 1)",
          "500": "hsla(225, 41%, 63%, 1)",
          "700": "hsla(219, 43%, 90%, 1)",
          "800": "hsla(210, 22%, 96%, 1)",
          "850": "hsla(0, 0%, 99%, 1)",
          "900": "hsla(0, 0%, 100%, 1)",
        },
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spacegrotesk: ["var(--font-space-grotesk)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
