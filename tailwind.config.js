/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Rutas de archivos en React
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['text', 'sans-serif'], // Agrega tu tipografía aquí
      },
    },
  },
  plugins: [],
};
