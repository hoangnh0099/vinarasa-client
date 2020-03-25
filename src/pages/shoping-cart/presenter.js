/**
 * @format
 */

import React, { useContext, useEffect, useState } from 'react';
import ShopingCartView from './view';
import { CartContext } from '../../providers/cart-provider';

const ShopingCartPresenter = props => {
  const cart = useContext(CartContext).cart;
  const onDeleteProduct = useContext(CartContext).onDeleteProduct;
  const [totalPrice, setTotalPrice] = useState(0);

  let _totalPrice = 0;

  // Tính tổng tiền
  const calculateTotalPrice = () => {
    cart.forEach(item => {
      _totalPrice += item.total;
    });
  };

  useEffect(() => {
    setTotalPrice(_totalPrice);
  }, [_totalPrice]);

  return (
    <ShopingCartView
      cart={cart}
      onDeleteProduct={onDeleteProduct}
      calculateTotalPrice={calculateTotalPrice}
      totalPrice={totalPrice}
    />
  );
};

export default ShopingCartPresenter;
