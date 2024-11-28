import type {Config} from "tailwindcss";

export default {
  darkMode: ["selector"],
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
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
