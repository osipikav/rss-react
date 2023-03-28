import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import FormItem from './FormItem';
import React from 'react';

describe('FormItem', () => {
  it('should render all form inputs', () => {
    render(<FormItem />);
    const nameInput = screen.getByLabelText(/name/i);
    const dateInput = screen.getByLabelText(/date of birth/i);
    const genderSelect = screen.getByLabelText(/gender/i);
    const consentRadioYes = screen.getByLabelText(/yes/i);
    const consentRadioNo = screen.getByLabelText(/no/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(genderSelect).toBeInTheDocument();
    expect(consentRadioYes).toBeInTheDocument();
    expect(consentRadioNo).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should display error message when name is less than 3 characters long', () => {
    render(<FormItem />);
    const nameInput = screen.getByLabelText(/name/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.change(nameInput, { target: { value: 'ab' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Name must be at least 3 characters long/i)).toBeInTheDocument();
  });

  it('should display error message when date is in the future', () => {
    render(<FormItem />);
    const dateInput = screen.getByLabelText(/date of birth/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.change(dateInput, { target: { value: '2025-01-01' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/The date should be in the past/i)).toBeInTheDocument();
  });

  it('should display error message when gender is not selected', () => {
    render(<FormItem />);
    const genderSelect = screen.getByLabelText(/gender/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.change(genderSelect, { target: { value: '' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Please choose a gender/i)).toBeInTheDocument();
  });
});
