import React from 'react';
import { ICard } from '../../types/types';
import './FormCards.css';

interface IProps {
  cards: ICard[];
}

class FormCards extends React.Component<IProps> {
  render() {
    const { cards } = this.props;

    return (
      <div className="cards-container">
        {cards.map((card: ICard, i) => (
          <div key={card.inputName + i} className="card-item">
            <h2>{card.inputName}</h2>
            <img src={card.imageUrl} alt="awd" />
            <p>Birth date: {card.inputDate}</p>
            <p>Gender: {card.selectText}</p>
            <p>Сonsent to receive notifications: {card.radioChecked}</p>
            <p>Consent to personal data</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FormCards;
