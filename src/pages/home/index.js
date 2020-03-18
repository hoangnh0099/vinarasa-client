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
import { demoData } from './demoData';

const Home = () => {
  return (
    <div className="Home">
      <HomeCarousel />

      <div className="feature-products">
        <h1>Feature Products</h1>
        <hr />
        <OwlCarousel
          className="owlCarousel"
          items={5}
          autoplay
          loop
          nav4
          dots
          lazyLoad
          lazyContent
          margin={30}
          navContainerClass="navContainerClass"
          navClass={['navClassLeft', 'navClassRight']}>
          {demoData.map(product => {
            return (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Home;
