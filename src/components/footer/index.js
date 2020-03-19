/**
 * @flow
 * @format
 */

import React from 'react';
import './style.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

const resource = {
  logo: require('../../assets/images/logo/logo.png'),
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about">
        <img src={resource.logo} alt="" className="logo" />
        <p>
          <br />
          Address: 123 Lĩnh Nam, Hoàng Mai, Hà Nội
          <br />
          Phone: 0912345678
          <br />
          Email: vinarasa@gmail.com
        </p>
      </div>

      <div className="list-footer">
        <ListGroup className="list">
          <ListGroupItem className="list">
            <h4>Sản phẩm</h4>
          </ListGroupItem>
          <ListGroupItem className="list">
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem className="list">Morbi leo risus</ListGroupItem>
          <ListGroupItem className="list">
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem className="list">Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>

      <div className="list-footer">
        <ListGroup className="list">
          <ListGroupItem className="list">
            <h4>Sản phẩm</h4>
          </ListGroupItem>
          <ListGroupItem className="list">
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem className="list">Morbi leo risus</ListGroupItem>
          <ListGroupItem className="list">
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem className="list">Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>

      <div className="list-footer">
        <ListGroup className="list">
          <ListGroupItem className="list">
            <h4>Sản phẩm</h4>
          </ListGroupItem>
          <ListGroupItem className="list">
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem className="list">Morbi leo risus</ListGroupItem>
          <ListGroupItem className="list">
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem className="list">Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
