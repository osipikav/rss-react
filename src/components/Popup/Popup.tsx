import React from 'react';
import './Popup.css';
import { IProduct } from 'types/types';

interface Props {
  movie: IProduct;
  onClose: () => void;
}

function Popup({ movie, onClose }: Props) {
  // console.log('movie :>> ', movie);
  const { title, year, large_cover_image: image, rating, synopsis } = movie;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="popup">
        <h2>{title}</h2>
        <h3>{year}</h3>
        <h3>Rating: {rating}</h3>
        <div className="card__photo" style={{ backgroundImage: `url(${image})` }}></div>
        <p> {synopsis}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
