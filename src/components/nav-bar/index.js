/**
 * @flow
 * @format
 */

import React, { useState } from 'react';
import './style.css';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';
import NotFound from '../../pages/not-found';
import { menuData } from './config';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import firebase from '../../services/firebaseConfig';
import Home from '../../pages/home';

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
        <Link to="/">
          <img
            src={resource.logo}
            loading="lazy"
            alt=""
            className="brand-logo"
          />
        </Link>

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
              <img
                loading="lazy"
                src={resource.search}
                className="icon"
                alt=""
              />
            </button>
          </form>

          <div className="cart">
            <button className="btn">
              <img loading="lazy" src={resource.cart} className="icon" alt="" />
            </button>
            <h6 className="price">$65.00</h6>
          </div>

          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle tag="div" color="#FFF" className="">
              <img loading="lazy" src={resource.user} className="icon" alt="" />
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
        <Route path="/" exact component={Home} />
        <Route path="/products/:id" exact component={() => <h1>Hello</h1>} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default NavBar;
