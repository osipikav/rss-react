import React from 'react';
// import list from '../../data/data';
import { IProduct } from 'types/types';
import './Card.css';

interface Props {
  movies: IProduct[];
}

function ProductsRender({ movies }: Props) {
  return (
    <>
      {movies.map(({ id, title, rating, medium_cover_image: image, year, genres }: IProduct) => (
        <div className="card" key={id}>
          <div className="card__title">{title}</div>
          <div className="card__photo" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="card__description">{genres.join(' ')}</div>
          <div className="card__description"> {year}</div>
          <div className="card__description">rating: {rating} </div>
        </div>
      ))}
    </>
  );
}
export default ProductsRender;
