/**
 * @flow
 * @format
 */

import React from 'react';
import './App.css';
import NavBar from './components/nav-bar';
import AuthProvider from './providers/auth-provider';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
      </AuthProvider>
    </div>
  );
};

export default App;
