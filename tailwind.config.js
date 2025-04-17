/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        danger: 'rgba(253, 93, 86, 1)',
        bronzeHead: 'rgba(188, 163, 127, 1)',
        baseBege: 'rgba(249, 239, 230, 1)',
        textBgWhite: 'rgba(217, 217, 217, 1)',
        bgMain: 'rgba(246, 246, 244, 1)',
        mainBlack: 'rgba(23, 23, 23, 1)',
        lineText: 'rgba(217, 217, 217, 1)',
      },
    },
  },
  plugins: [],
};
