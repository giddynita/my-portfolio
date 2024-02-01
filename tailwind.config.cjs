/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'emerald',
      'dark',
      'retro',
      'cmyk',
      'pastel',
      'synthwave',
      'dracula',
      'coffee',
      'business',
    ],
  },
}
