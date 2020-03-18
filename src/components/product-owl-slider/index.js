/**
 * @flow
 * @format
 */

import React from 'react';
import ProductCard from '../product-card';
import OwlCarousel from 'react-owl-carousel';
import './style.css';

export type Props = {
  data: Array,
};

const ProductOwlSlider = (props: Props) => {
  const { data } = props;

  return (
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
      {data.map(product => {
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
  );
};

export default ProductOwlSlider;
