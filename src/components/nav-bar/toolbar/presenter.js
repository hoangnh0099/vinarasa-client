/**
 * @format
 */

import React, { useEffect } from 'react';
import ToolbarView from './view';
import firebase from '../../../services/firebaseConfig';

const ToolbarPresenter = props => {
  const uid = localStorage.getItem('uid');

  const onSignOut = async () => {
    try {
      return await firebase.auth().signOut();
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    firebase
      .database()
      .ref(`/${uid}/cart`)
      .on('value', snap => {
        console.log(snap.val());
      });
  }, []);

  return <ToolbarView {...props} onSignOut={onSignOut} />;
};

export default ToolbarPresenter;
