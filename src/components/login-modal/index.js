/**
 * @flow
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import * as firebase from 'firebase';

export type Props = {
  modal: boolean,
  toggleModal: Function,
};

const LoginModal = (props: Props) => {
  const { modal, toggleModal } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setSignUp] = useState(false);

  const onLogin = async () => {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      localStorage.setItem('userInfo', { user: result.user });
      toggleModal();
    } catch (e) {
      setError(e.message);
    }
  };

  const onOpenSignUp = () => {
    setSignUp(true);
  };

  const onSignUp = async () => {
    try {
      if (password === rePassword) {
        const result = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        toggleModal();
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Modal isOpen={modal}>
      <ModalHeader>Đăng nhập</ModalHeader>
      <ModalBody>
        {!!error && error}
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Nhập email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Mật khẩu</Label>
            <Input
              type="password"
              name="password"
              id="exampleEmail"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </FormGroup>
          {isSignUp && (
            <FormGroup>
              <Label for="exampleEmail">Nhập lại mật khẩu</Label>
              <Input
                type="password"
                name="repassword"
                id="exampleEmail"
                placeholder="Nhập lại mật khẩu"
                value={rePassword}
                onChange={event => setRePassword(event.target.value)}
              />
            </FormGroup>
          )}
        </Form>
      </ModalBody>
      <ModalFooter>
        {!isSignUp && (
          <Button color="success" onClick={onLogin}>
            Đăng nhập
          </Button>
        )}
        {!isSignUp && (
          <Button outline color="success" onClick={onOpenSignUp}>
            Đăng ký
          </Button>
        )}
        {isSignUp && (
          <Button color="success" onClick={onSignUp}>
            Đăng ký
          </Button>
        )}
        <Button color="link" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default LoginModal;
