import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      mainText: string;
      secondaryText: string;
      mainBg: string;
      secondaryBg: string;
      accentColor: string;
      primary: string;
      primaryLighter: string;
      black: string;
      grey: string;
      darkGrey: string;
      white: string;
    };
    spacing: (val: number) => string;
    border: {
      dark: {
        thin: string;
        base: string;
        wide: string;
      };
      light: {
        thin: string;
        base: string;
        wide: string;
      };
      radius: (val: number) => string;
    };
    shadow: {
      color: string;
      offset: {
        width: number;
        height: number;
      };
      opacity: number;
      radius: number;
      elevation: number;
    };

    font: {
      min: (val: number) => string;
      base: (val: number) => string;
      max: (val: number) => string;
    };
  }
}
