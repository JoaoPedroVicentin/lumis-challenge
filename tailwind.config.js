/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          gray: {
            50: '#F2F2F7',
            100: '#D9D9D9',
            150: '#757575',
            200: '#49454F',
            250: '#2C2C2C',
            300: '#1E1E1E',
          },
          white: {
            50: '#F0F3FF',
            100: '#F5F5F5',
          },
          blue: {
            50: '#263156',
            100: '#212E4C',
          },
          green: '#11B047',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        list: 'repeat(auto-fit, minmax(208px, 1fr))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
