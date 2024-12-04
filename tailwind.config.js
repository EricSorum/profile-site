import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        fadein1: {
          '0%': { 
            opacity: '.5',
           letterSpacing: '.1rem'
          },
          '100%': { 
          }
        },
     },
      animation: {
        'fadein1': 'fadein1 5s ease-in-out', 
      }
    },
  },
  plugins: [],
}