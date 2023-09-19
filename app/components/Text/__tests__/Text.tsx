/**
 * @jest-environment jsdom
 */

import React from 'react';
import { matchers } from '@emotion/jest';
import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';

import Text from '../';
import theme, { modes } from '../../../utils/theme';

expect.extend(matchers);

describe('Text', () => {
  it('should get theme values for styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Text data-testid="text" sx={{ color: 'blue.50' }} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('text')).toHaveStyleRule('color', theme.colors.blue[50]);
  });

  it('should default to level 4 font', () => {
    render(
      <ThemeProvider theme={theme}>
        <Text data-testid="text" sx={{ color: 'blue.50' }} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('text')).toHaveStyleRule('font-size', theme.fontSizes[3]);
    expect(screen.getByTestId('text')).toHaveStyleRule('line-height', theme.lineHeights[5]);
  });

  it('should have correct color for light mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.light }}>
        <Text data-testid="text" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('text')).toHaveStyleRule('color', theme.colors.gray[60]);
  });

  it('should have correct color for dark mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.dark }}>
        <Text data-testid="text" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('text')).toHaveStyleRule('color', theme.colors.gray[2]);
  });
});
