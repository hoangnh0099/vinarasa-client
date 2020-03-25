/**
 * @format
 */

import React from 'react';
import './style.css';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';
import NotFound from '../../pages/not-found';
import { menuData } from './config';
import Home from '../../pages/home';
import ProductDetail from '../../pages/product-detail';
import ShopingCart from '../../pages/shoping-cart';
import Toolbar from './toolbar';
import Shop from '../../pages/shop';

const resource = {
  logo: require('../../assets/images/logo/logo.png'),
  search: require('../../assets/icons/search.png'),
  cart: require('../../assets/icons/shopping-cart.png'),
  user: require('../../assets/icons/user.png'),
};

const NavBarView = props => {
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

        <Toolbar />
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/:id" exact component={ProductDetail} />
        <Route path="/shoping-cart" exact component={ShopingCart} />
        <Route path="/shop" exact component={Shop} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default NavBarView;
