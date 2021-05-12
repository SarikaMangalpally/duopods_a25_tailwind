module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '41': '10.15rem'
      },
      zIndex: {
        '-1': '-1'
      },
      backgroundColor: {
        "light-gray": "#F6F7F9",
        
      },
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif']
      },
      colors: {
        orange: {
          dark: '#FD371F',
          light: '#FF844B'
        },
        black: {
          lighter: "#171C26",
          light: "#191723",
          DEFAULT: "#000000",
          medium: "#4B4955"
        },
        "radio-green": "#00FF00"
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["checked"],
      borderWidth: ["checked"],
    },
  },
  plugins: []
}
