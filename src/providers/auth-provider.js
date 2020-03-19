/**
 * @flow
 * @format
 */

import React, { createContext, useEffect, useState } from 'react';
import firebase from '../services/firebaseConfig';

export const AuthContext = createContext();

const AuthProvider = props => {
  const { children } = props;
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      user ? setLoggedIn(true) : setLoggedIn(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={loggedIn}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
