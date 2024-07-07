import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'orbitron': ['Orbitron', 'sans-serif'], 
      'digital': ['VT323', 'monospace'],
      'kaushan': ['Kaushan Script'],

    },
    extend: {
      backgroundImage: {
        'darkImage': "url('../public/mosque-2.jpg')",
        'lightImage': "url('../public/mosque-1.jpg')",

      },
    },
  },
  plugins: [],
};
export default config;
