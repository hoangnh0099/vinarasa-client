/**
 * @flow
 * @format
 */

import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = props => {
  const [cart, setCart] = useState([]);

  const onAddToCart = product => {
    setCart(oldState => [...oldState, product]);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, onAddToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
