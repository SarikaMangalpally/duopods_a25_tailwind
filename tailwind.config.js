module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '4': 'repeat(4, auto)'
      },
      screens: {
        "2md": "840px",
        "3md": "900px",
      },
      maxWidth: {
        "2md": "980px",
        "2lg": "1180px"
      },
      padding: {
        '15': "3.85rem",
        "5.5": "1.35rem",
      },
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
      letterSpacing: {
        "ultra-wide": "0.25em",
        "double-wide": "0.2em"
      }
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
