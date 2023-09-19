/**
 * @jest-environment jsdom
 */

import React from 'react';
import { matchers } from '@emotion/jest';
import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';

import Heading from '../';
import theme, { modes } from '../../../utils/theme';

expect.extend(matchers);

describe('Heading', () => {
  it('should get theme values for styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Heading data-testid="heading" sx={{ color: 'blue.50' }} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('heading')).toHaveStyleRule('color', theme.colors.blue[50]);
  });

  it('should default to level 4 font', () => {
    render(
      <ThemeProvider theme={theme}>
        <Heading data-testid="heading" sx={{ color: 'blue.50' }} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('heading')).toHaveStyleRule('font-size', theme.fontSizes[4]);
    expect(screen.getByTestId('heading')).toHaveStyleRule('line-height', theme.lineHeights[4]);
  });

  it('should have correct color for light mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.light }}>
        <Heading data-testid="heading" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('heading')).toHaveStyleRule('color', theme.colors.gray[80]);
  });

  it('should have correct color for dark mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.dark }}>
        <Heading data-testid="heading" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('heading')).toHaveStyleRule('color', theme.colors.gray[5]);
  });
});
