/**
 * @format
 */

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../../login-modal';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import { AuthContext } from '../../../providers/auth-provider';
import { CartContext } from '../../../providers/cart-provider';

const resource = {
  logo: require('../../../assets/images/logo/logo.png'),
  search: require('../../../assets/icons/search.png'),
  cart: require('../../../assets/icons/shopping-cart.png'),
  user: require('../../../assets/icons/user.png'),
};

const ToolbarView = props => {
  const { onSignOut } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const toggleModal = () => setModal(!modal);

  const onSearch = () => {};

  const loggedIn = useContext(AuthContext);
  const cartCount = useContext(CartContext).cart;

  const userDropdown = () => {
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle tag="div" color="#FFF" className="">
          <img loading="lazy" src={resource.user} className="icon" alt="" />
        </DropdownToggle>

        <DropdownMenu right>
          <DropdownItem header>Nguyễn Huy Hoàng</DropdownItem>
          <DropdownItem onClick={() => {}} tag="div">
            Đổi mật khẩu
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={onSignOut}>Đăng xuất</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  };

  const loginButton = () => {
    return (
      <Button outline color="success" onClick={toggleModal}>
        Đăng nhập
      </Button>
    );
  };

  return (
    <div className="toolbar">
      <form method="GET" className="form">
        <input
          type="text"
          placeholder="Search our catalog"
          className="form-input"
        />
        <button onClick={onSearch} className="btn">
          <img loading="lazy" src={resource.search} className="icon" alt="" />
        </button>
      </form>

      <div className="cart">
        <button className="btn">
          <div className="cart-container">
            <Link to="/shoping-cart">
              <img loading="lazy" src={resource.cart} className="icon" alt="" />
              <div className="cart-count">
                {!!cartCount && cartCount.length}
              </div>
            </Link>
          </div>
        </button>
      </div>

      <LoginModal modal={modal} toggleModal={toggleModal} />

      {loggedIn ? userDropdown() : loginButton()}
    </div>
  );
};

export default ToolbarView;
