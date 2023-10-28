import React from 'react';
import {render, waitFor} from '@testing-library/react-native';

import App from '../App';

describe('App', () => {
  it('renders the NavigationBar and StatusBar correctly', async () => {
    const { getByTestId } = render(<App />);

    const navigationBar = await waitFor(() => getByTestId('navigationBar'));
    const statusBar = await waitFor(() => getByTestId('statusBar'));

    expect(navigationBar).toBeTruthy();
    expect(statusBar).toBeTruthy();
  });
});
