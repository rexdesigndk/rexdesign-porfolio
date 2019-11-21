module.exports = {
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"]
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px"
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: "#FF6E4A",
        secondary: "#ececeb",
        accent: "#FF6E4A"
      }
    }
  },
  variants: {},
  plugins: []
};
