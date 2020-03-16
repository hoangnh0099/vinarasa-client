/**
 * @flow
 * @format
 */

import React from 'react';
import './style.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import NotFound from '../../pages/not-found';
import { menuData } from './config';

const resource = {
  logo: require('../../assets/images/logo/logo.png'),
  search: require('../../assets/icons/search.png'),
  cart: require('../../assets/icons/shopping-cart.png'),
  user: require('../../assets/icons/user.png'),
};

const NavBar = () => {
  const onSearch = () => {};

  return (
    <BrowserRouter>
      <div className="nav-bar">
        <img src={resource.logo} alt="" className="brand-logo" />

        <nav>
          {menuData.map(menuItem => {
            return (
              <NavLink
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

          <button>
            <img src={resource.cart} className="icon" />
          </button>

          <h5 className="price">$65.00</h5>

          <button>
            <img src={resource.user} className="icon" />
          </button>
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
