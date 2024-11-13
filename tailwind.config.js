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
            transform: 'scale(1.3)', 
            opacity: '.5',
            transform: 'translateY(-30px)',
            letterSpacing: '1rem'
          },
          '100%': { 
            transform: 'scale(1)', 
            transform: 'translateY(0)',
            letterSpacing: 'normal'
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