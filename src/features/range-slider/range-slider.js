import noUiSlider from 'nouislider';

function createRangeSlider(slider) {
  const { min } = slider.dataset;
  const { max } = slider.dataset;

  const start = slider.querySelector('.js-start');
  const end = slider.querySelector('.js-end');

  noUiSlider.create(slider, {
    start: [Number(start.innerText), Number(end.innerText)],
    range: {
      min: Number(min),
      max: Number(max),
    },
    connect: true,
  });

  slider.noUiSlider.on('update', (values, handle) => {
    if (handle === 0) {
      const value = Math.round(values[0].replace(',-', '')).toLocaleString('ru');
      start.innerText = value;
    }

    if (handle === 1) {
      const value = Math.round(values[1].replace(',-', '')).toLocaleString('ru');
      end.innerText = value;
    }
  });
}

export default createRangeSlider;
