/**
 *  @flow
 *  @format
 */

import React from 'react';
import './style.css';
import HomeCarousel from '../../components/home-carousel';
import ProductCard from '../../components/product-card';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
  return (
    <div className="Home">
      <HomeCarousel />

      <div className="feature-products">
        <OwlCarousel items={3} loop nav>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Home;
