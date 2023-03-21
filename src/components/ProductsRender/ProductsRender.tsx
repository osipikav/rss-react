import React from 'react';
import list from '../../data/data';
import { IProduct } from 'types/types';
import './Card.css';

function ProductsRender() {
  return (
    <>
      {list.map(({ id, title, thumbnail, price, rating, discountPercentage }: IProduct) => (
        <div className="card" key={id}>
          <div className="card__title">{title}</div>
          <div className="card__photo" style={{ backgroundImage: `url(${thumbnail})` }}></div>
          <div className="card__description">price: {price}$</div>
          <div className="card__description">rating: {rating} </div>
          <div className="card__description">discount: {discountPercentage}%</div>
        </div>
      ))}
    </>
  );
}
export default ProductsRender;
