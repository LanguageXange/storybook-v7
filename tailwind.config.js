/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [],
};
