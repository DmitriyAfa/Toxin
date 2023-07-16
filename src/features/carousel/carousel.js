import { tns } from "tiny-slider/src/tiny-slider"

function makeCarousel(item) {
  const container = item.querySelector('.js-carousel__slides')
  const navContainer = item.querySelector('.js-carousel__nav')

  console.log('container ', container)
  console.log('navContainer ', navContainer)
  return tns({
    container: container,
    items: 1,
    slideBy: 'page',
    swipeAngle: false,
    nav: true,
    navContainer: navContainer,
  });
}

export { makeCarousel };