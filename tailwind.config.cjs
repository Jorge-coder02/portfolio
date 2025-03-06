/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  purge: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"], // esto quita archivos no usados de css/js
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
