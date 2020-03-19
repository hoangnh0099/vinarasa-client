/**
 * @flow
 * @format
 */

import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Badge, Toast, ToastBody, ToastHeader } from 'reactstrap';

export type Props = {
  image: string,
  price: string,
  name: string,
  badgeTitle?: string,
  salePercent?: string,
};

const resource = {
  cart: require('../../assets/icons/shopping-cart-white.png'),
};

const ProductCard = (props: Props) => {
  const [isOpenToast, setOpenToast] = useState(false);
  const { price, name, image, badgeTitle, salePercent } = props;

  return (
    <div className="ProductCard">
      <img src={image} className="image" alt={name} />
      <div className="badge-area">
        {badgeTitle && (
          <Badge color="success" className="badge">
            {badgeTitle}
          </Badge>
        )}
        {salePercent && (
          <Badge color="success" className="badge">
            {salePercent}%
          </Badge>
        )}
      </div>
      <div className="product-info">
        <Link to={`/products/${name}`} className="product-name">
          {name}
        </Link>
        <p>{price}</p>
      </div>

      <div className="overlay">
        <div className="button-area">
          <button
            className="icon-button"
            onClick={() => {
              setOpenToast(true);
              setTimeout(() => {
                setOpenToast(false);
              }, 2000);
            }}>
            <i className="fas fa-cart-plus" />
          </button>
          <Link to={`/products/${name}`} className="icon-link">
            <i className="fas fa-eye" />
          </Link>
        </div>
      </div>

      <Toast isOpen={isOpenToast}>
        <ToastBody>Thêm vào giỏ hàng thành công</ToastBody>
      </Toast>
    </div>
  );
};

export default ProductCard;
