import { buttonVariants } from '@/shared/ui/button/button';
import { dropdowns } from '@/entities/dropdown/dropdown';
import { removeDisabledFromMinusBtn, addDisabledFromMinusBtn } from '@/shared/ui/button/button';
import { makeDropdownFunctional } from '../../entities/dropdown/dropdown';
import { makeAmenitiesText } from './lib/makeAmenitiesText';


if (dropdowns) {
  const arrDropdowns = [...dropdowns]
  const dropdown = arrDropdowns.find(elem => (elem.dataset.name === 'amenities'));

  if (dropdown) {
    const amenities = {
      bedroom: 0,
      bed: 0,
      bathroom: 0,
    }

    const drop = dropdown.querySelector('.js-dropdown__drop');
    const input = dropdown.querySelector('.js-input')
    let items = drop.querySelectorAll('.js-dropdown__item');
    items = [...items]

    function makeInputText(amenities) {
      const isZero = (value) => (value === 0);
      const isOne = (value) => (value === 1);
      const isMoreThanZero = (value) => (value > 0);
      const isMoreThanFour = (value) => (value > 4);
      const isLessOrEqualFour = (value) => (value <= 4);

      const makeBedroomText = () => {
        const text = []
        if (isOne(amenities.bedroom)) text.push(`${amenities.bedroom} спальня`)
        if (isLessOrEqualFour(amenities.bedroom) && isMoreThanZero(amenities.bedroom) && !isOne(amenities.bedroom)) text.push(`${amenities.bedroom} спальни`)
        if (isMoreThanFour(amenities.bedroom) || isZero(amenities.bedroom)) text.push(`${amenities.bedroom} спален`)

        return text;
      }

      const makeBedText = () => {
        const text = []
        if (isOne(amenities.bed)) text.push(`${amenities.bed} кровать`)
        if (isLessOrEqualFour(amenities.bed) && isMoreThanZero(amenities.bed) && !isOne(amenities.bed)) text.push(`${amenities.bed} кровати`)
        if (isMoreThanFour(amenities.bed) || isZero(amenities.bed)) text.push(`${amenities.bed} кроватей`)

        return text;
      }

      const makeBathroomText = () => {
        const text = []
        if (isOne(amenities.bathroom)) text.push(`${amenities.bathroom} ванная комната`)
        if (isLessOrEqualFour(amenities.bathroom) && isMoreThanZero(amenities.bathroom) && !isOne(amenities.bathroom)) text.push(`${amenities.bathroom} ванные комнаты`)
        if (isMoreThanFour(amenities.bathroom) || isZero(amenities.bathroom)) text.push(`${amenities.bathroom} ванных комнат`)

        return text;
      }

      return [...makeBedroomText(), ...makeBedText(), ...makeBathroomText()];
    }

    function makeCounterHandler({ dataName, amenities }) {
      const item = items.find(elem => (elem.dataset.name === dataName));
      if (item) {
        const counter = item.querySelector(`.js-dropdown__counter`)
        const counterText = counter.querySelector('.js-text')
        const minusBtn = counter.querySelector(`.${buttonVariants.MINUS}`)
        const plusBtn = counter.querySelector(`.${buttonVariants.PLUS}`)
        const minusBtnClassList = minusBtn.classList;

        const plusClickHandle = () => {
          amenities[dataName] += 1
          counterText.innerText = amenities[dataName]
          let text = makeInputText(amenities)
          text.pop()

          input.value = `${text.join(', ')}...`;
          if (amenities[dataName] > 0) {
            removeDisabledFromMinusBtn(minusBtnClassList)
          }
        }

        const minusClickHandle = () => {
          if (amenities[dataName] > 0) {
            amenities[dataName] -= 1
            counterText.innerText = amenities[dataName]
            let text = makeInputText(amenities)
            text.pop()

            input.value = `${text.join(', ')}...`;
            if (amenities[dataName] <= 0 && !minusBtnClassList.contains('button_variant_math_disabled')) {
              addDisabledFromMinusBtn(minusBtnClassList)
            }
          }
        }

        plusBtn.addEventListener('click', plusClickHandle)
        minusBtn.addEventListener('click', minusClickHandle)
      } else {
        console.log(`Item with the name ${dataName} is not found`)
      }
    }

    // makeCounterHandler({ dataName: 'bedroom', amenities })
    // makeCounterHandler({ dataName: 'bed', amenities })
    // makeCounterHandler({ dataName: 'bathroom', amenities })

    makeDropdownFunctional(dropdown, makeAmenitiesText)
  }
}