/**
 * @jest-environment jsdom
 */

import React from 'react';
import { matchers } from '@emotion/jest';
import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';

import Box from '../';
import theme from '../../../utils/theme';

expect.extend(matchers);

describe('Box', () => {
  it('should get theme values for styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Box data-testid="box" sx={{ color: 'blue.50', m: 4 }} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('box')).toHaveStyleRule('color', theme.colors.blue[50]);
    expect(screen.getByTestId('box')).toHaveStyleRule('margin', theme.space[4]);
  });
});
