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
  const [error, setError] = useState('');

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
              placeholder="type your email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Input
              type="password"
              name="password"
              id="exampleEmail"
              placeholder="type your password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={onLogin}>
          Sign In
        </Button>
        <Button color="link" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default LoginModal;
