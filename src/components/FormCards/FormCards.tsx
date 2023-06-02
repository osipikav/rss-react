import React from 'react';
import { IData } from '../../types/types';
import './FormCards.css';

interface IProps {
  cards: IData[];
}

function FormCards({ cards }: IProps) {
  return (
    <div className="cards-container">
      {cards.map((card: IData, i: number) => (
        <div key={card.name + i} className="card-item">
          <h2>{card.name}</h2>
          <img src={card.image} alt="img" />
          <p>Birth date: {card.date}</p>
          <p>Gender: {card.gender}</p>
          <p>Сonsent to receive notifications: {!card.notificationPreference ? 'yes' : 'no'}</p>
          <p>Consent to personal data</p>
        </div>
      ))}
    </div>
  );
}

export default FormCards;
