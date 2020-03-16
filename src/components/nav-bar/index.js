/**
 * @flow
 * @format
 */

import React, { useState } from 'react';
import './style.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import NotFound from '../../pages/not-found';
import { menuData } from './config';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import firebase from '../../services/firebaseConfig';

const resource = {
  logo: require('../../assets/images/logo/logo.png'),
  search: require('../../assets/icons/search.png'),
  cart: require('../../assets/icons/shopping-cart.png'),
  user: require('../../assets/icons/user.png'),
};

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const onSearch = () => {};

  const onSignOut = async () => {
    try {
      return await firebase.auth().signOut();
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <BrowserRouter>
      <div className="nav-bar">
        <img src={resource.logo} alt="" className="brand-logo" />

        <nav>
          {menuData.map(menuItem => {
            return (
              <NavLink
                key={menuItem.id}
                to={menuItem.path}
                className="nav-item"
                exact
                activeClassName="active">
                {menuItem.title}
              </NavLink>
            );
          })}
        </nav>

        <div className="toolbar">
          <form method="GET" className="form">
            <input
              type="text"
              placeholder="Search our catalog"
              className="form-input"
            />
            <button onClick={onSearch} className="btn">
              <img src={resource.search} className="icon" />
            </button>
          </form>

          <div className="cart">
            <button className="btn">
              <img src={resource.cart} className="icon" />
            </button>
            <h6 className="price">$65.00</h6>
          </div>

          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle tag="div" color="#FFF" className="dropdown">
              <img src={resource.user} className="icon" />
            </DropdownToggle>

            <DropdownMenu right>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={onSignOut}>Đăng xuất</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <Switch>
        <Route path="/" exact component={() => <h1>Home</h1>} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default NavBar;
