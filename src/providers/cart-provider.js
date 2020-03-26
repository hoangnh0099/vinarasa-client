/**
 * @format
 */

import React, { createContext, useEffect, useState } from 'react';
import firebase from '../services/firebaseConfig';

export const CartContext = createContext(null);

const CartProvider = props => {
  const [cart, setCart] = useState([]);

  const uid = localStorage.getItem('uid');

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
    firebase
      .database()
      .ref(`/${uid}/cart`)
      .set(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, onAddToCart, onDeleteProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
