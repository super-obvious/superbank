import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Superbank heading', () => {
  render(<App />);
  const heading = screen.getByText(/Superbank/i);
  expect(heading).toBeInTheDocument();
});
