/**
 *  @flow
 *  @format
 */

import React, { useState } from 'react';
import './style.css';
import {
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';

const items = [
  {
    id: 1,
    src: 'https://picsum.photos/1440/500?random=1',
    altText: '',
    caption: '',
  },
  {
    id: 2,
    src: 'https://picsum.photos/1440/300?random=2',
    altText: '',
    caption: '',
  },
  {
    id: 3,
    src: 'https://picsum.photos/1440/300?random=3',
    altText: '',
    caption: '',
  },
];

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <div
          style={{ backgroundImage: `url(${item.src})` }}
          className="banner"
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default HomeCarousel;
