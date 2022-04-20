const THEME = {
  colors: {
    mainText: '#008080',
    secondaryText: '#e4eafc',
    mainBg: '#e4eafc',
    secondaryBg: '#008080',
    accentColor: 'tomato',
    primary: '#008080',
    primaryLighter: '#018b8b',
    black: '#000',
    grey: '#dadada',
    darkGrey: '#8e8e93',
    white: '#fff',
  },
  spacing: (val: number) => `${4 * val}px`,
  border: {
    dark: {
      thin: '1px solid #008080',
      base: '2px solid #008080',
      wide: '3px solid #008080',
    },
    light: {
      thin: '1px solid #dde9e9',
      base: '2px solid #dde9e9',
      wide: '3px solid #dde9e9',
    },
    radius: (val: number) => `${3 * val}px`,
  },
  shadow: {
    color: '#000',
    offset: {
      width: 0,
      height: 2,
    },
    opacity: 0.25,
    radius: 3.84,
    elevation: 5,
  },
  font: {
    min: (val: number) => `${8 * val}px`,
    base: (val: number) => `${16 * val}px`,
    max: (val: number) => `${48 * val}px`,
  },
};

export default THEME;
