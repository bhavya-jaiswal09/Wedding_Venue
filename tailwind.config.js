/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#f5faff',
        bgBase: '#e9f2ff',
        bgMist: '#f2f7ff',
        bgPearl: '#f8fcff',
        glassLight: 'rgba(245, 250, 255, 0.84)',
        glassDark: 'rgba(235, 245, 255, 0.56)',
        inkStrong: 'rgb(10 10 10 / <alpha-value>)',
        inkSoft: 'rgb(46 42 38 / <alpha-value>)',
        gold: 'rgb(154 120 73 / <alpha-value>)',
        goldDeep: 'rgb(120 90 52 / <alpha-value>)',
        strokeSoft: 'rgb(195 208 225 / <alpha-value>)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Times New Roman"', 'serif'],
        sans: ['"Manrope"', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '2rem',
        droplet: '2.25rem 2.25rem 2.25rem 0.95rem',
      },
      boxShadow: {
        glass: '0 10px 28px rgba(86, 67, 43, 0.11)',
        glow: '0 0 0 1px rgba(255,255,255,0.35), 0 16px 36px rgba(198, 161, 103, 0.16)',
        deep: '0 24px 54px rgba(62, 45, 24, 0.22)',
      },
      maxWidth: {
        content: '1240px',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
