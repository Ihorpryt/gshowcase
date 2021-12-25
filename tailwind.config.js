module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      'xs': '.625rem',
      'xls': '.813rem',
      'sm' : '.875rem',
      'xl': '1.25rem',
    },
    colors: {
      white: '#ffffff',
      blue_9: '#0078D4',
      blue_0: '#E2E5ED',
      white_glacier_def: 'rgb(255, 255, 255, 0.15)',
      white_glacier_hov: 'rgb(255, 255, 255, 0.25)',
      black_10: '#171717',
      gray_4: '#697386',
      gray_0: '#f4f4f4',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
            boxShadow: {
        '3xl': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
