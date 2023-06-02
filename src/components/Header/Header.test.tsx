import { describe, it } from 'vitest';
import Header from '../Header/Header';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

describe('Header component', () => {
  it('should display current path in the header title', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Header />
      </MemoryRouter>
    );
    const headerTitle = screen.getByText(/home/i);
    expect(headerTitle).toBeInTheDocument();
  });
});
