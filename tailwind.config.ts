import { join } from "path";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Dark mode'u sınıf bazlı yapıyoruz
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aboutUsPageCard:'#6DAABD',
        background: "var(--background)",
        foreground: "var(--foreground)",
        textGray:  '#4F5353',
        cardBlue: '#6DAABD',
        cardPurple: '#8F99C2',
        cardPink: '#e1b790',
        sponsorBG:'#5585B6',
        footerBG:'#082F49',
        footerCard:'#5585B6',
        joinButton:'#FFB900',
        homeGradientFrom:'#38BDF8',
        homeGradientTo:'#218bb9',
        joinusGradientFrom:'#F0DBA6',
        joinusGradientTo:'#EABC42',
        joinusGradientVia:'#EABC42',
        footerLine:'#264769',
        footerContact:'#72A4D6',
      },
    },
  },
  plugins: [],
  
};

export default config;
