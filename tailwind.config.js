/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'half':'75vh',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

