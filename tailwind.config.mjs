/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tesla-red': '#cc0000',
        'tesla-black': '#171a20',
        'tesla-grey': '#5c5e62',
        'tesla-bg': '#f4f4f4',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
};
