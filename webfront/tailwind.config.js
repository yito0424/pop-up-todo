module.exports = {
  purge: ["./src/*.tsx"],
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
        burger: '48px',
      },
      height: {
        header: '50px',
        burger: '48px',
      },
      spacing: {
        header: '50px',
      },
      zIndex: {
        header: 100,
        sidebar: 99,
        burger: 101,
      },
      fontSize: {
        sidebar: '1.5rem'
      },
      inset: {
        '5percent': '5%',
        '2': '2rem'
      },
      borderRadius: {
        '10px': '10px',
      }
    },
  },
  plugins: [],
};
