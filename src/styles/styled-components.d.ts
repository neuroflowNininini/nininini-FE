import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      xsmall: '0.75rem';
      small: '0.82rem';
      smallmedium: '0.93rem';
      medium: '1.125rem';
      largemedium: '1.25rem';
      large: '1.5rem';
      xlarge: '1.625rem';
    };
    fontFamily: {
      default: 'Noto Sans KR, sans-serif';
    };
    colors: {
      theme: '#FF1057';
      gray: {
        100: '#EBEBEB';
        200: '#CFD1D4';
        300: '#B1B1B1';
        400: '#888E97';
        500: '#5C636C';
        600: '#404751';
        700: '#1A1F27';
        800: '#13171D';
        900: '#050608';
      };
      white: {
        100: '#FEFEFE';
        200: '#FAFAFA';
        300: '#F9F9F9';
        400: '#888E97';
        500: '#EDEDED';
        600: '#E6E6E6';
        700: '#D0D0D0';
        800: '#B8B8B8';
        900: '#9C9C9C';
      };
    };
  }
}
