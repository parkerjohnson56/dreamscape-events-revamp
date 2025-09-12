import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: {
          50: '#f0f4e8',
          100: '#e1e9d1',
          200: '#c3d3a3',
          300: '#a5bd75',
          400: '#87a747',
          500: '#90A955', // Main green
          600: '#7a8b4a',
          700: '#646d3b',
          800: '#4e4f2c',
          900: '#38311d',
        },
        dark: {
          50: '#f0f2f0',
          100: '#e1e5e1',
          200: '#c3cbc3',
          300: '#a5b1a5',
          400: '#879787',
          500: '#3A3D19', // Main dark
          600: '#2e3114',
          700: '#22250f',
          800: '#16190a',
          900: '#0a0d05',
        },
        forest: {
          50: '#f0f2f0',
          100: '#e1e5e1',
          200: '#c3cbc3',
          300: '#a5b1a5',
          400: '#879787',
          500: '#132A13', // Main forest
          600: '#0f2210',
          700: '#0b1a0c',
          800: '#071208',
          900: '#030a04',
        },
        sage: {
          50: '#f7f8f5',
          100: '#eff1eb',
          200: '#dfe3d7',
          300: '#cfd5c3',
          400: '#bfc7af',
          500: '#BCCA9B', // Main sage
          600: '#96a27c',
          700: '#707a5d',
          800: '#4a523e',
          900: '#242a1f',
        }
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'italiana': ['Italiana', 'serif'],
        'satisfy': ['Satisfy', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
