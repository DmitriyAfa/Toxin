import { makeRangeSlider } from './range-slider';

const rangeSliders = document.querySelectorAll('.js-range-slider');

if (rangeSliders) {
  rangeSliders.forEach((element) => makeRangeSlider(element));
}