import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import css from '@styled-system/css';

import theme, { modes } from '../src/client/utils/theme';
import globalStyles from '../src/client/utils/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    exclude: ['theme'],
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={{ ...theme, mode: context.globals.mode }}>
      <Global styles={css(globalStyles(context.globals.mode))} />
      <Story />
    </ThemeProvider>
  ),
];

export const globalTypes = {
  mode: {
    name: 'Mode',
    description: 'Global mode for components',
    defaultValue: modes.light,
    toolbar: {
      icon: 'circlehollow',
      items: [modes.light, modes.dark],
    },
  },
};
