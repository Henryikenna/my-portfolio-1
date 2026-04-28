/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E0BC6E',
        'gold-dim': '#8B6F2E',
        'warm-white': '#F2EFE8',
        surface: '#101010',
        'surface-2': '#181818',
        'surface-3': '#222222',
        ink: '#080808',
      },
      fontFamily: {
        signature: ["Great Vibes"],
        display: ['"DM Serif Display"', "serif"],
        body: ["Outfit", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
}
