// module.exports = {
//   content: [
//     "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Asegúrate de que este contenido esté ahí
//   ],
//   plugins: [
//     require("daisyui"), // Agregar DaisyUI como plugin
//   ],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
