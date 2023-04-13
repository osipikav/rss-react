import React, { useState } from 'react';
import { IProduct } from 'types/types';
import './Card.css';
import Popup from '../Popup/Popup';

interface Props {
  movies: IProduct[];
}

function ProductsRender({ movies }: Props) {
  const [selectedCard, setSelectedCard] = useState<IProduct | null>(null);

  function handleCardClick(selectedMovie: IProduct) {
    setSelectedCard(selectedMovie);
  }

  function handlePopupClose() {
    setSelectedCard(null);
  }

  return (
    <>
      {movies.map((movie: IProduct) => (
        <div className="card" key={movie.id} onClick={() => handleCardClick(movie)}>
          <div className="card__title">{movie.title}</div>
          <div
            className="card__photo"
            style={{ backgroundImage: `url(${movie.large_cover_image})` }}
          ></div>
          <div className="card__description">{movie.genres.join(', ')}</div>
          <div className="card__description">{movie.year}</div>
          <div className="card__description">rating: {movie.rating}</div>
        </div>
      ))}
      {selectedCard && <Popup movie={selectedCard} onClose={handlePopupClose} />}
    </>
  );
}

export default ProductsRender;
