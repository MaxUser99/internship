module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'layout': '80px 1fr 80px',
      },
      gridTemplateRows: {
        'layout': '80px 1fr 80px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
