/**
 * @flow
 * @format
 */

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export type Props = {
  image: string,
  price: string,
  name: string,
};

const ProductCard = (props: Props) => {
  const { price, name, image } = props;

  return (
    <div className="ProductCard">
      <img src={image} className="image" alt={name} />
      <div className="product-info">
        <Link to={`/products/${name}`}>{name}</Link>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
