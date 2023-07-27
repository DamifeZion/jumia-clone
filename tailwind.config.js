/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "280px",
      // => @media (min-width: 280px) { ... }

      sm: "340px",
      // => @media (min-width: 340px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      smlg: "1024px",
      // => @media (min-width: 768px) { ... }

      lg: "1200px",
      // => @media (min-width: 1120px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
