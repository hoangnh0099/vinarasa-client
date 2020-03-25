/**
 * @format
 */

import React from 'react';
import ToolbarView from './view';
import firebase from '../../../services/firebaseConfig';

const ToolbarPresenter = props => {
  const onSignOut = async () => {
    try {
      return await firebase.auth().signOut();
    } catch (e) {
      console.error(e.message);
    }
  };

  return <ToolbarView {...props} onSignOut={onSignOut} />;
};

export default ToolbarPresenter;
