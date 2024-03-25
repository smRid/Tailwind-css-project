/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  fontFamily: {
    'Poppins': ['Poppins', 'sans-serif'],
  },
  extend: {
    spacing: {
      'Container': '1280px',
    }
  },
};
export const plugins = [];
