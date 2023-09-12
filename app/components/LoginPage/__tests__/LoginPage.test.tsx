/**
 * @jest-environment jsdom
 */

import React from 'react';
import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import LoginPage from '..';
import getWrapper from '../../../utils/wrapper';

describe('Name of the group', () => {
  it('should Redirect to main App if user is logged in', () => {
    const history = createMemoryHistory({ initialEntries: ['/login'] });

    render(<LoginPage />, { wrapper: getWrapper({ user: { id: 'test' }, history }) });

    expect(history.location.pathname).toBe('/');
  });

  it('should have a sign in button', () => {
    render(<LoginPage />, { wrapper: getWrapper() });

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
