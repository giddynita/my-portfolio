/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      /* {
        mytheme: {
          primary: '',
          secondary: '',
          accent: '',
          neutral: '',
          'base-100': '',
        },
      } */ 'emerald',
      'dark',
    ],
  },
}
