/**
 * @flow
 * @format
 */

import React from 'react';
import './App.css';
import NavBar from './components/nav-bar';
import AuthProvider from './providers/auth-provider';
import CartProvider from './providers/cart-provider';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <NavBar />
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
