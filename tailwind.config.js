/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  backgroundImage: {
    bricks: "url('/ui/bg_mask.webp')",
    orundum: "url('/img/items/DIAMOND_SHD.webp')",
    originite: "url('/img/items/DIAMOND.webp')",
    gachaAnimation:
        "url('/ui/GachaAnimationImage/UI_GACHA_ONE_BACKGROUND_IMG.webp')",
    noskill: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><line x1='0' y1='100%' x2='100%' y2='0' stroke='#000' /></svg>")`,
    grid: "url('/img/rank/bg.webp')",
},
  theme: {
    extend: {},
  },
  plugins: [],
}
