import { type Theme as StyledSystemTheme } from '@styled-system/css';

const makeTheme = <T extends StyledSystemTheme>(t: T) => t;
const theme = makeTheme({
  colors: {
    blue: {
      5: '#E8F5FF',
      10: '#CFE8FF',
      20: '#A1D3FF',
      30: '#58B4FF',
      40: '#2491FF',
      50: '#0076DA',
      60: '#005EA2',
      70: '#0B4778',
      80: '#112F4E',
    },
    gray: {
      0: '#FFFFFF',
      1: '#FBFCFD',
      2: '#F7F9FA',
      3: '#F5F6F7',
      4: '#F1F3F6',
      5: '#EDEFF0',
      10: '#DFE1E2',
      20: '#C6CACE',
      30: '#A9AEB1',
      40: '#8D9297',
      50: '#71767A',
      60: '#565C65',
      70: '#3D4551',
      80: '#2D2E2F',
      90: '#1C1D1F',
      100: '#000000',
    },
    mint: {
      5: '#D5FBF3',
      10: '#7EFBE1',
      20: '#29E1CB',
      30: '#1DC2AE',
      40: '#00A398',
      50: '#008480',
      60: '#0F6460',
      70: '#0B4B3F',
      80: '#123131',
    },
    red: {
      5: '#FFF3F2',
      10: '#FDE0DB',
      20: '#FDB8AE',
      30: '#FF8D7B',
      40: '#FB5A47',
      50: '#E52207',
      60: '#B50909',
      70: '#8B0A03',
      80: '#5C1111',
    },
  },
  fonts: {
    default: '"Source Sans Pro", "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  fontSizes: {
    1: '0.625rem',
    2: '0.75rem',
    3: '1rem',
    4: '1.25rem',
    5: '1.5rem',
    6: '2rem',
    7: '2.5rem',
    8: '3rem',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    1: '112.5%',
    2: '125%',
    3: '133.4%',
    4: '140%',
    5: '150%',
    6: '166.7%',
  },
  space: {
    1: '0.0625rem',
    2: '0.125rem',
    3: '0.25rem',
    4: '0.5rem',
    5: '0.75rem',
    6: '1rem',
    7: '1.25rem',
    8: '1.5rem',
    9: '2rem',
    10: '2.5rem',
    11: '3rem',
    12: '4rem',
    13: '4.5rem',
    14: '5rem',
  },
  radii: {
    1: '0rem',
    2: '0.125rem',
    3: '0.25rem',
    4: '0.5rem',
    5: '1rem',
    full: '100%',
  },
  styles: {
    root: {
      fontFamily: 'default',
      fontWeight: 'regular',
    },
  },
});

export enum modes {
  light = 'light',
  dark = 'dark',
}

export type Theme = typeof theme & {
  mode: modes;
};

export default theme;
