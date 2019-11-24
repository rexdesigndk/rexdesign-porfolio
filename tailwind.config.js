module.exports = {
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Work Sans', 'sans-serif']
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px'
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true
    },
    boxShadow: {
      default: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
      md: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
      lg: '0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12)',
      xl: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(66,153,225,0.5)',
      focus: '0 0 0 3px rgba(66,153,225,0.5)',
      none: 'none',
    },
    extend: {
      colors: {
        primary: 'hsl(33, 100%, 80%)',
        secondary: '#ececeb',
        accent: 'hsl(33, 100%, 49%)'
      }
    },
  },
  variants: {},
  plugins: []
};
