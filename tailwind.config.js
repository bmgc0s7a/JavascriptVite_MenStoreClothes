/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito' : 'Nunito Sans',
        'kaushan' : 'Kaushan Script'
      },
      translate: {
        '-2/4': '-50%',
      }
    },
  },
  plugins: [],
}
