module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        primary: 'white',
        secondly: '#838383',
        accent: '#F0AD2C',
      },
      width: {
        sidebar: '250px',
      },
      height: {
        header: '50px',
      },
      spacing: {
        header: '50px',
      },
      zIndex: {
        header: 100,
        sidebar: 99,
      },
      fontSize: {
        sidebar: '1.5rem'
      },
    },
  },
  plugins: [],
};
