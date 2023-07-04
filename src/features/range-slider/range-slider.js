import noUiSlider from 'nouislider';

function makeRangeSlider(slider) {
  const min = slider.dataset.min;
  const max = slider.dataset.max;

  const start = slider.querySelector('.js-start')
  const end = slider.querySelector('.js-end')

  noUiSlider.create(slider, {
    start: [Number(start.innerText), Number(end.innerText)],
    range: {
      'min': Number(min),
      'max': Number(max)
    },
    connect: true,
  });

  slider.noUiSlider.on('update', function (values, handle) {
    if (handle === 0) {
      let value = Math.round(values[0].replace(',-', '')).toLocaleString('ru');
      start.innerText = value
    }

    if (handle === 1) {
      let value = Math.round(values[1].replace(',-', '')).toLocaleString('ru');
      end.innerText = value
    }
  });

}

export { makeRangeSlider }