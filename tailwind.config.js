/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    container: {
      center: true,
      // Add max widhts for different screen sizes
      screens: {
        // sm: '100%',
        // md: '100%',
        // lg: '1024px',
        xl: '1376px'
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '2rem',
        xl: '2rem',
      }
    },

    lineHeight: {
      '11': '5.625rem',
      '12': '4.1875rem', 
    },

    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      gray: {
        50: '#FCFCFD',
        100: '#F9FAFB',
        200: '#F2F4F7',
        300: '#EAECF0',
        400: '#D0D5DD',
        500: '#98A2B3',
        600: '#667085',
        700: '#475467',
        800: '#344054',
        900: '#1D2939',
        950: '#101828'
      }
    },

    extend: {
      colors: {
        primary: {
          50: '#FFF7ED',
          100: '#FFECD4',
          200: '#FFD6A8',
          300: '#FFB870',
          400: '#FF8E37',
          500: '#FF6F00',
          600: '#F05306',
          700: '#C73C07',
          800: '#9E300E',
          900: '#7F2A0F',
          950: '#451205'
        },
        secondary: {
          50: '#EFF7FF',
          100: '#DAEDFF',
          200: '#BDE1FF',
          300: '#90CFFF',
          400: '#5BB4FF',
          500: '#3593FC',
          600: '#1F74F1',
          700: '#175BD9',
          800: '#1A4CB3',
          900: '#1B428D',
          950: '#152A56'
        }
      }
    },

    fontFamily: {
      sans: ['Manrope', 'sans-serif', ...defaultTheme.fontFamily.sans],
      accent: ['Playfair Display', 'serif', ...defaultTheme.fontFamily.sans],
    }
  },

  plugins: [
    // require('flowbite/plugin')
  ],

  darkMode: 'class',
}

