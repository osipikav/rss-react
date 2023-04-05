import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCards from './FormCards';

describe('FormCards', () => {
  const cardsData = [
    {
      name: 'John Doe',
      image: 'https://example.com/john-doe.jpg',
      date: '1980-01-01',
      gender: 'male',
      notificationPreference: false,
    },
    {
      name: 'Jane Smith',
      image: 'https://example.com/jane-smith.jpg',
      date: '1990-02-02',
      gender: 'female',
      notificationPreference: true,
    },
  ];

  it('renders the cards container', () => {
    render(<FormCards cards={cardsData} />);
    const cardsContainerElement = screen.getByTestId('cards-container');
    expect(cardsContainerElement).toBeInTheDocument();
  });

  it('renders the correct number of cards', () => {
    render(<FormCards cards={cardsData} />);
    const cardElements = screen.getAllByTestId('card-item');
    expect(cardElements.length).toBe(cardsData.length);
  });

  it('renders the correct data for each card', () => {
    render(<FormCards cards={cardsData} />);
    cardsData.forEach((card) => {
      const cardNameElement = screen.getByText(card.name);
      const cardImageElement = screen.getByAltText('img', { src: card.image });
      const cardDateElement = screen.getByText(`Birth date: ${card.date}`);
      const cardGenderElement = screen.getByText(`Gender: ${card.gender}`);
      const cardNotificationElement = screen.getByText(
        `Сonsent to receive notifications: ${!card.notificationPreference ? 'yes' : 'no'}`
      );
      const cardConsentElement = screen.getByText('Consent to personal data');
      expect(cardNameElement).toBeInTheDocument();
      expect(cardImageElement).toBeInTheDocument();
      expect(cardDateElement).toBeInTheDocument();
      expect(cardGenderElement).toBeInTheDocument();
      expect(cardNotificationElement).toBeInTheDocument();
      expect(cardConsentElement).toBeInTheDocument();
    });
  });
});
