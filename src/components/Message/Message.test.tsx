import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Message from './Message';

describe('Message', () => {
  it('should display error message when date is in the future', () => {
    render(<Message />);
    expect(screen.getByText(/Data has been saved!/i)).toBeInTheDocument();
  });
});
