import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

test('HomePage render correctly', () => {
  render(<HomePage />);
  const textElement = screen.getByText('Home');
  expect(textElement).toBeInTheDocument();
});
