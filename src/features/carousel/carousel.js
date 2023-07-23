import { tns } from 'tiny-slider/src/tiny-slider';

function createCarousel(item) {
  const container = item.querySelector('.js-carousel__slides');
  const navContainer = item.querySelector('.js-carousel__nav');

  return tns({
    container,
    items: 1,
    slideBy: 'page',
    swipeAngle: false,
    nav: true,
    navContainer,
  });
}

export default createCarousel;
