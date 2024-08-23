/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wh-10": "#F4F4F4",
        "wh-50": "#FBFBFB",
        "wh-100": "#C9C9C9",
        "wh-300": "#939393",
        "wh-500": "#C9C9C9",
        "wh-100": "#C9C9C9",
        "wh-100": "#C9C9C9",
        "wh-100": "#C9C9C9",
        "wh-100": "#C9C9C9",
        "wh-100": "#C9C9C9",
        "wh-100": "#C9C9C9",
      }
    },
  },
  plugins: [],
}