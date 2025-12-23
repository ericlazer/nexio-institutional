/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{html,js}",
    "!./node_modules/**"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          paper: '#EAE8E1',
          silver: '#EDEEF0',
          blue: '#1A45ED',
          dark: '#0A0F29',
          stone: '#C8C6C1',
        }
      },
      fontFamily: {
        sans: ['General Sans', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'massive': 'clamp(2.5rem, 12vw, 11rem)', 
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      screens: {
        'xs': '380px'
      },
      spacing: {
        '128': '32rem',
      }
    }
  },
  plugins: [],
}
