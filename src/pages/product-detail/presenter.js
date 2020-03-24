/**
 * @flow
 * @format
 */

import React, { useContext, useState } from 'react';
import ProductDetailView from './view';
import { CartContext } from '../../providers/cart-provider';

const imageDataDemo = [
  'https://picsum.photos/400/400?random=1',
  'https://picsum.photos/400/400?random=2',
  'https://picsum.photos/400/400?random=3',
];

const ProductDetailContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [imageData, setImageData] = useState(imageDataDemo);
  const [activeImage, setActiveImage] = useState(imageData[0]);

  const onChangeImage = link => {
    setActiveImage(link);
  };

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const cartContext = useContext(CartContext);

  const addToCart = product => {
    cartContext.onAddToCart(product);
  };

  return (
    <ProductDetailView
      imageData={imageData}
      toggle={toggle}
      onChangeImage={onChangeImage}
      activeImage={activeImage}
      activeTab={activeTab}
      addToCart={addToCart}
    />
  );
};

export default ProductDetailContainer;
