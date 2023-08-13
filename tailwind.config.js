const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Ubintu', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

