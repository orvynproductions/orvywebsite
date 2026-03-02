import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#f6eedd',
          200: '#eddcbb',
          300: '#e4cb99',
          400: '#dbb977',
          500: '#c1a768',
          600: '#a88644',
          700: '#7e6533',
          800: '#544322',
          900: '#2a2211',
        },
        gray: {
          100: '#d3d3d3',
          200: '#a7a7a7',
          300: '#7c7c7c',
          400: '#505050',
          500: '#242424',
          600: '#1d1d1d',
          700: '#161616',
          800: '#0e0e0e',
          900: '#070707',
        },
        page: '#141414',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        script: ['Qwitcher Grypen', 'cursive'],
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'kenburns': 'kenburns 12s ease-in-out infinite',
        'hero-breathe': 'hero-breathe 20s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
      },
      keyframes: {
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'kenburns': {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.08) translate(-1%, -1%)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
        'hero-breathe': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
