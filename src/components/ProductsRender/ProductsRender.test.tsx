import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsRender from './ProductsRender';
import { describe, expect } from 'vitest';

const movies = [
  {
    id: 1,
    title: 'Film',
    year: 1994,
    genres: ['Drama'],
    rating: 9.3,
    large_cover_image: 'https://example.com/smth.jpg',
    synopsis: 'Two men...',
  },
  {
    id: 2,
    title: 'Film2',
    year: 1994,
    genres: ['Drama'],
    rating: 9.5,
    large_cover_image: 'https://example.com/smth2.jpg',
    synopsis: 'Two men...',
  },
];

describe('ProductsRender component', () => {
  test('displays all movie cards', () => {
    render(<ProductsRender movies={movies} />);
    const cardElements = screen.getAllByRole('card');
    expect(cardElements.length).toBe(movies.length);
    // movies.forEach((movie, index) => {
    //   expect(cardElements[index]).toHaveTextContent(movie.title);
    //   expect(cardElements[index]).toHaveTextContent(movie.genres.join(', '));
    //   expect(cardElements[index]).toHaveTextContent(movie.year.toString());
    //   expect(cardElements[index]).toHaveTextContent(movie.rating.toString());
    // });
  });
});
