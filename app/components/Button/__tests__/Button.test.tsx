/**
 * @jest-environment jsdom
 */

import React from 'react';
import { matchers } from '@emotion/jest';
import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';

import Button from '../';
import theme, { modes } from '../../../utils/theme';

expect.extend(matchers);

describe('Button', () => {
  it('should get theme values for styles', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.light }}>
        <Button sx={{ color: 'blue.50' }} />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toHaveStyleRule('color', theme.colors.blue[50]);
  });

  it('should have correct styles for primary button with light mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.light }}>
        <Button />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should have correct styles for primary button with dark mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.dark }}>
        <Button />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should have correct styles for standard button with light mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.light }}>
        <Button variant="standard" />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should have correct styles for standard button with dark mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.dark }}>
        <Button variant="standard" />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should have correct styles for danger button with light mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.light }}>
        <Button variant="danger" />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should have correct styles for danger button with dark mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.dark }}>
        <Button variant="danger" />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should have correct styles for accent button with light mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.light }}>
        <Button variant="accent" />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should have correct styles for accent button with dark mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.dark }}>
        <Button variant="accent" />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should have correct styles for hollow button with light mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.light }}>
        <Button variant="hollow" />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should have correct styles for hollow button with dark mode', () => {
    render(
      <ThemeProvider theme={{ ...theme, mode: modes.dark }}>
        <Button variant="hollow" />
      </ThemeProvider>,
    );

    expect(screen.getByRole('button')).toMatchSnapshot();
  });
});
