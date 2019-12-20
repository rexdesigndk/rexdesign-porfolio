module.exports = {
  theme: {
    fontFamily: {
      display: ['Raleway', 'Roboto', '-apple-system', 'Ubuntu', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1400px'
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true
    },
    boxShadow: {
      default: '  0 0px 0.7px rgba(0, 0, 0, 0.028), 0 0px 2.2px rgba(0, 0, 0, 0.042), 0 0px 10px rgba(0, 0, 0, 0.07)',
      md: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
      lg: '0 0px 0.7px rgba(0, 0, 0, 0.028), 0 4.5px 6.7px rgba(0, 0, 0, 0.042), 0 20px 30px rgba(0, 0, 0, 0.07)',
      xl: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
      outline: '0 0 0 3px rgba(66,153,225,0.5)',
      focus: '0 0 0 3px rgba(66,153,225,0.5)',
      none: 'none',
    },
    extend: {
      colors: {
        primary: '#4C64AC',
        accent: '#2F3E6B',
        secondary: '#F9FAFF'
      }
    },
  },
  variants: {
   borderWidth: ['responsive', 'hover', 'focus']
  },
  plugins: []
};
