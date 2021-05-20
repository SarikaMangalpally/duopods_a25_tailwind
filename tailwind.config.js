module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
     dropshadow: {
      xl: '1.1rem 2.2rem 3.4rem rgb(0, 0, 0, 0.15)'
    },
    extend: {
      backgroundImage: theme => ({
        'white-duopods': "url('/assets/white_duopods_with_bg.png')"
      }),
      gridTemplateRows: {
        '4': 'repeat(4, auto)',
        '3': "1fr 2fr 1fr"
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
        '15': '3.75rem',
        '41': '10.15rem',
        '82': '23rem',
        '120': '36.25rem',
        '132':'42.375rem'
      },
      height: {
        '15': '3.75rem',
        '82': "22rem",
        '120': '36.25rem',
        '118': '33.75rem',
        '146': '51.5rem'
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
        "radio-green": "#00FF00",
        orange: {
          dark: '#FD371F',
          light: '#FF844B',
          lightest: '#FC7A30'
        },
        black: {
          lightest: "#171C26",
          lighter: "#172032",
          light: "#191723",
          DEFAULT: "#000000",
          medium: "#4B4955"
        },
        violet: {
          dark: "#7C16FE",
          "ultra-dark": "#1F1927"
        },
        blue: {
          dark: "#30CBFC",
          
        },
        green: {
          'light': "#00DC58",
          "lighter": "#84E820"
        },
        red: {
          'dark': '#FE1616'
        },
        ash: {
          dark: "#5C638F",
        }
      },
      letterSpacing: {
        "ultra-wide": "0.25em",
        "double-wide": "0.2em"
      }
    }
  },
  variants: {
    extend: {
      borderColor: ["checked"],
      borderWidth: ["checked"],
    },
  },
  plugins: []
}
