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
        'massive': 'clamp(3rem, 10vw, 8rem)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      screens: {
        'xs': '380px'
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'premium': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02), 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0,0,0,0.02)',
        'premium-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01), 0 0 0 1px rgba(0,0,0,0.02)',
      }
    }
  },
  plugins: [],
}
