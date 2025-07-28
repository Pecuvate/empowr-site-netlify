/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          // Brand Colors
          'empowr-blue': {
            50: '#f0f4ff',
            100: '#e0e9ff',
            200: '#c7d7ff',
            300: '#a5bcff',
            400: '#8195ff',
            500: '#4A70C2', // Primary brand blue
            600: '#3d5ba3',
            700: '#334a85',
            800: '#2d3e6d',
            900: '#29355c',
          },
          'empowr-red': {
            50: '#fff0f0',
            100: '#ffe0e0',
            200: '#ffc7c7',
            300: '#ffa5a5',
            400: '#ff8181',
            500: '#FF6161', // Primary brand red
            600: '#e64d4d',
            700: '#cc3a3a',
            800: '#b32b2b',
            900: '#992020',
          },
          'empowr-black': {
            50: '#f6f6f6',
            100: '#e7e7e7',
            200: '#d1d1d1',
            300: '#b0b0b0',
            400: '#888888',
            500: '#6d6d6d',
            600: '#5d5d5d',
            700: '#4f4f4f',
            800: '#454545',
            900: '#1B1B1B', // Primary brand black
          },
          // Semantic color mappings
          primary: {
            DEFAULT: '#4A70C2',
            50: '#f0f4ff',
            100: '#e0e9ff',
            200: '#c7d7ff',
            300: '#a5bcff',
            400: '#8195ff',
            500: '#4A70C2',
            600: '#3d5ba3',
            700: '#334a85',
            800: '#2d3e6d',
            900: '#29355c',
          },
          secondary: {
            DEFAULT: '#FF6161',
            50: '#fff0f0',
            100: '#ffe0e0',
            200: '#ffc7c7',
            300: '#ffa5a5',
            400: '#ff8181',
            500: '#FF6161',
            600: '#e64d4d',
            700: '#cc3a3a',
            800: '#b32b2b',
            900: '#992020',
          },
          neutral: {
            DEFAULT: '#1B1B1B',
            50: '#f6f6f6',
            100: '#e7e7e7',
            200: '#d1d1d1',
            300: '#b0b0b0',
            400: '#888888',
            500: '#6d6d6d',
            600: '#5d5d5d',
            700: '#4f4f4f',
            800: '#454545',
            900: '#1B1B1B',
          },
        },
        fontFamily: {
          // Make Poppins the default sans font
          sans: ['var(--font-poppins)', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          // Keep the variable for backward compatibility
          'font-sans': ['var(--font-poppins)', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        fontSize: {
          // Custom font sizes optimized for Poppins
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
        },
        fontWeight: {
          // Poppins font weights
          'light': '300',
          'normal': '400',
          'medium': '500',
          'semibold': '600',
          'bold': '700',
        },
      },
    },
    plugins: [],
  };
  