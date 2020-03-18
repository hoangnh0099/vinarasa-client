/**
 *  @flow
 *  @format
 */

import React from 'react';
import './style.css';
import HomeCarousel from '../../components/home-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { demoData } from './demoData';
import ProductOwlSlider from '../../components/product-owl-slider';

const Home = () => {
  return (
    <div className="Home">
      <HomeCarousel />

      <div className="feature-products">
        <h3>Hot Products</h3>
        <hr />
        <ProductOwlSlider data={demoData} />
      </div>

      <div className="feature-products">
        <h3>Sale Products</h3>
        <hr />
        <ProductOwlSlider data={demoData} />
      </div>

      <div className="feature-products">
        <h3>New Products</h3>
        <hr />
        <ProductOwlSlider data={demoData} />
      </div>
    </div>
  );
};

export default Home;
