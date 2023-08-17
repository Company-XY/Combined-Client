/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "hsl(94, 55%, 56%)",
        hoverColor: "hsl(93, 75%, 76%)",
        paleGreen: "hsl(96, 75%, 89%)",
        whiteColor: "hsl(0, 0%, 100%)",
        blackColor: "hsl(0, 0%, 18%)",
        greyText: "hsl(0, 0%, 75%)",
        bgColor: "hsl(113, 11%, 85%)",
        inputColor: "hsl(330, 12%, 97%)",
        inputAlt: "hsl(154, 14%, 90%)",
      },
      fontSize: {
        "2.5xl": "2.5rem",
        "1.5xl": "1.5rem",
        "1.25xl": "1.25rem",
        "3xl": "3rem",
        base: ".938rem",
        sm: ".813rem",
        xs: ".75rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
