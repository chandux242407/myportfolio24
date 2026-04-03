/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "sans-serif"],
      },
      colors: {
        darkBg: "#0a0a0c",
        lightBg: "#fbfbfd",
        navy: {
          900: "#0f172a",
        }
      }
    },
  },
  plugins: [],
}
