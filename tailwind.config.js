/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'lobster': ['Lobster', 'cursive'],
        'permanent': ['Permanent Marker', 'cursive'],
        spartan:"Spartan",
        thundercover:"Thundercover",
        ubuntu:"Ubuntu",
      },
    },
  },
  plugins: [],
}

