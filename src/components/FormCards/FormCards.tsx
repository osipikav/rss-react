import React from 'react';
import { ICard } from '../../types/types';

interface IProps {
  cards: ICard[];
}

class FormCards extends React.Component<IProps> {
  render() {
    const { cards } = this.props;

    return (
      <div>
        {cards.map((card: ICard) => (
          <div key={card.inputName}>
            <h2>Name: {card.inputName}</h2>
            <img src={card.imageUrl} alt="awd" />
            <p>Birth date:{card.inputDate}</p>
            <p>Gender:{card.selectText}</p>
            <p>Delivery date:{card.inputDate}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FormCards;
