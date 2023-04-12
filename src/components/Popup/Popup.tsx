import React from 'react';
import './Popup.css';
import { IProduct } from 'types/types';

interface Props {
  movie: IProduct;
  onClose: () => void;
}

function Popup({ movie, onClose }: Props) {
  const { title, year, large_cover_image: image, rating, genres, synopsis } = movie;
  return (
    <div className="popup__overlay" onClick={onClose}>
      <div className="popup">
        <h2>{title}</h2>
        <div className="popup__image" style={{ backgroundImage: `url(${image})` }}></div>
        <h3>{genres.join(', ')}</h3>
        <h3>{year}</h3>
        <p> {synopsis}</p>
        <h3>Rating: {rating}</h3>
      </div>
    </div>
  );
}

export default Popup;
