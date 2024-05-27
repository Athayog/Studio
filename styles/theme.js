import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
     ...chakraTheme,

     fonts: {
          ...chakraTheme.fonts,
          html: `Josefin Sans`,
          heading: `Josefin Sans`,
          body: `Josefin Sans,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
     },
     fontWeights: {
          thin: 100,
          light: 300,
          normal: 400,
          medium: 600,
          bold: 700
     },
     icons: {
          ...chakraTheme.icons,
          athayog: {}
     },
     colors: {
          ...chakraTheme.colors,
          primaryGreen: '#84986D',
          secondaryGreen: '#ADDCBC',
          primaryBlack: '#414642',
          primaryDarkGray: '#4E4E4E',
          primaryGray: '#9C9795',
          primaryWhite: '#F3F3F5',
          indigo: {
               50: '#f7e3ff',
               100: '#e0b2ff',
               200: '#c980ff',
               300: '#b34efe',
               400: '#9e1dfd',
               500: '#8405e4',
               600: '#6702b2',
               700: '#4a0080',
               800: '#2c004e',
               900: '#11001e'
          },
          aygreen: {
               50: '#eef6e7',
               100: '#d7e0ce',
               200: '#bfcab2',
               300: '#a7b595',
               400: '#8ea078',
               500: '#74875f',
               600: '#5a6949',
               700: '#404b33',
               800: '#262e1d',
               900: '#091100'
          },
          aygray: {
               50: '#ffeeef',
               100: '#dfd7d3',
               200: '#c4bdbb',
               300: '#aaa4a2',
               400: '#908b88',
               500: '#77716f',
               600: '#5d5855',
               700: '#443e3c',
               800: '#2c2522',
               900: '#0e0e00'
          },
          ayorange: {
               50: '#fbf6f6',
               100: '#eedcdc',
               200: '#dfbebe',
               300: '#cd9999',
               400: '#c38484',
               500: '#b56767',
               600: '#a84d4e',
               700: '#992e2f',
               800: '#8d1617',
               900: '#6b0a0b'
          }
     },
     initialColorMode: 'light',
     useSystemColorMode: false
};

export default theme;
