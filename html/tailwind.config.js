/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    colors: {
      'black': '#000000',
      'nyu-violet': '#57068c',
      'light-grey': '#f2f2f2',
      'dark-grey': '#404040',
      'medium-grey-1': '#6d6d6d',
      'white': '#ffffff',
      'light-violet-1': '#ab82c5',
      'light-violet-2': '#eee6f3'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      gotham_black: ["Gotham_black"],
      gotham_book: ["Gotham_book"]

    },
    extend: {
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px'
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('tailwindcss')
  ]
}

