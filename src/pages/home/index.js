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
import Footer from '../../components/footer';

const Home = () => {
  return (
    <div className="Home">
      <HomeCarousel />

      <div className="feature-products">
        <h3>Hot Products</h3>
        <hr />
        <ProductOwlSlider data={demoData} badgeTitle={'Hot'} salePercent={20} />
      </div>

      <div className="feature-products">
        <h3>Sale Products</h3>
        <hr />
        <ProductOwlSlider
          data={demoData}
          badgeTitle={'Sale'}
          salePercent={50}
        />
      </div>

      <div className="feature-products">
        <h3>New Products</h3>
        <hr />
        <ProductOwlSlider data={demoData} badgeTitle={'New'} />
      </div>

      <hr />

      <Footer />
    </div>
  );
};

export default Home;
