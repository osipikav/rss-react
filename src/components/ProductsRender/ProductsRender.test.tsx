import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsRender from './ProductsRender';

test('renders product cards correctly', () => {
  render(<ProductsRender />);
  const cards = screen.getAllByTestId('product-card');
  expect(cards).toHaveLength(4); 
  expect(cards[0]).toHaveTextContent('Prod 1'); 
  expect(cards[1]).toHaveStyle('background-image: url(test-image-2.jpg)'); 
  expect(cards[2]).toHaveTextContent('price: 20$'); 
  expect(cards[3]).toHaveTextContent('discount: 0%'); 
});