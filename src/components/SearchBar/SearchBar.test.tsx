import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders the SearchBar component', () => {
    render(<SearchBar />);
    const searchBarElement = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    expect(searchBarElement).toBeInTheDocument();
  });

  it('updates searchValue state when input value changes', () => {
    render(<SearchBar />);
    const searchBarElement = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(searchBarElement, { target: { value: 'test value' } });
    expect(searchBarElement.value).toBe('test value');
  });

  it('updates localStorage when searchValue state changes', () => {
    render(<SearchBar />);
    const searchBarElement = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(searchBarElement, { target: { value: 'test value' } });
    expect(localStorage.getItem('searchValue')).toBe('test value');
  });
});