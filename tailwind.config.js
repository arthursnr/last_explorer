/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      olors: {
        'dark-800': 'rgba(13,22,27,1)', // Adiciona a cor personalizada
      },
    },
  },
  plugins: [],
}

