/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        app: 'url(/app-bg.png)'
      },

      colors: {
        cablue: {
          800: '#002c58',
          900: '#181818'
        },
        red: {
          500: '#ff0002'
        },
      }
    },
  },
  plugins: [],
}
