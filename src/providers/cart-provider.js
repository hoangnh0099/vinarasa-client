/**
 * @format
 */

import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext(null);

const CartProvider = props => {
  const [cart, setCart] = useState([]);

  const onAddToCart = product => {
    setCart(oldState => [...oldState, product]);
  };

  const onDeleteProduct = (item, index) => {
    let _cart = [...cart];
    _cart.splice(index, 1);
    setCart(_cart);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, onAddToCart, onDeleteProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
