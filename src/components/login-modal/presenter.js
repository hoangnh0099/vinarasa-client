/**
 * @format
 */

import React, { useState } from 'react';
import LoginModalView from './view';
import * as firebase from 'firebase';

const LoginModalPresenter = props => {
  const { toggleModal } = props;

  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSignUp, setSignUp] = useState(false);

  const onLogin = async () => {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email.trim(), password.trim());
      localStorage.setItem('uid', result.user.uid);
      toggleModal();
    } catch (e) {
      setError(e.message);
    }
  };

  const onSignUp = async () => {
    try {
      if (password === rePassword) {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.trim(), password.trim());
        toggleModal();
      } else {
        setError('Mật khẩu không khớp');
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const onOpenSignUp = () => {
    setSignUp(true);
  };

  return (
    <LoginModalView
      {...props}
      onLogin={onLogin}
      onSignUp={onSignUp}
      onOpenSignUp={onOpenSignUp}
      error={error}
      setPassword={setPassword}
      setRePassword={setRePassword}
      password={password}
      rePassword={rePassword}
      isSignUp={isSignUp}
      setEmail={setEmail}
      email={email}
      isSignUp={isSignUp}
    />
  );
};

export default LoginModalPresenter;
