import createCarousel from './carousel';

const carousels = document.querySelectorAll('.js-carousel');

if (carousels.length > 0) {
  carousels.forEach((carousel) => {
    createCarousel(carousel);
  });
}
