/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sra-primary': '#1e7e34',
        'sra-dark': '#0d4620',
        'sra-light': '#f0f9f5',
      },
    },
  },
  plugins: [],
}
