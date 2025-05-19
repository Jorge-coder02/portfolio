/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      minHeight: {
        "screen-dvh-minus-header": "calc(100dvh - 80px)", // 100dvh - altura del header (80px)
      },
    },
  },
  plugins: [require("daisyui")],
};
