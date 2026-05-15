import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0A0E27',
        'navy-deep': '#04040b',
        charcoal: '#1A1F3A',
        violet: {
          DEFAULT: '#A78BFA',
          glow: 'rgba(167,139,250,0.35)',
          soft: '#7C3AED',
          mist: '#C4B5FD',
        },
        cream: '#F5F0E8',
        'cream-dark': '#E8E3DB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
