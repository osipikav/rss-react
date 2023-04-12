import React from 'react';
import { render, screen } from '@testing-library/react';
import Popup from './Popup';

const movie = {
  id: 1,
  title: 'Film',
  year: 1994,
  genres: ['Drama'],
  rating: 9.3,
  large_cover_image: 'https://example.com/smth.jpg',
  synopsis: 'Two men...',
};

describe('Popup component', () => {
  test('renders movie details', () => {
    render(<Popup movie={movie} onClose={() => {}} />);
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.genres.join(', '))).toBeInTheDocument();
    expect(screen.getByText(movie.year.toString())).toBeInTheDocument();
    expect(screen.getByText(movie.synopsis)).toBeInTheDocument();
    expect(screen.getByText(`Rating: ${movie.rating}`)).toBeInTheDocument();
  });
});
