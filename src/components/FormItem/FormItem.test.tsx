import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormItem from './FormItem';
import React from 'react';
describe('FormItem', () => {
  it('should render all form inputs', () => {
    render(<FormItem />);
    const nameInput = screen.getByLabelText(/name/i);
    const dateInput = screen.getByLabelText(/date of birth/i);
    const genderSelect = screen.getByLabelText(/gender/i);
    const consentCheckbox = screen.getByLabelText(/consent to personal data/i);
    const consentRadioYes = screen.getByLabelText(/yes/i);
    const consentRadioNo = screen.getByLabelText(/no/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(genderSelect).toBeInTheDocument();
    expect(consentCheckbox).toBeInTheDocument();
    expect(consentRadioYes).toBeInTheDocument();
    expect(consentRadioNo).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
