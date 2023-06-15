import { buttonVariants } from '@/shared/ui/button/button';
import { dropdowns } from '@/entities/dropdown/dropdown';
import { removeDisabledFromMinusBtn, addDisabledFromMinusBtn } from '@/shared/ui/button/button';


if (dropdowns) {
  const arrDropdowns = [...dropdowns]
  const dropdown = arrDropdowns.find(elem => (elem.dataset.name === 'amenities'));


  if (dropdown) {
    const drop = dropdown.querySelector('.js-dropdown__drop');
    let items = drop.querySelectorAll('.js-dropdown__item');
    items = [...items]

    const bedroomItem = items.find(elem => (elem.dataset.name === 'bedroom'));
    const bedItem = items.find(elem => (elem.dataset.name === 'bed'));
    const bathroomItem = items.find(elem => (elem.dataset.name === 'bathroom'));

    if (bedroomItem) {
      const text = bedroomItem.querySelector(`.js-dropdown__counter`).querySelector('.js-text')
      const minusBtn = bedroomItem.querySelector(`.${buttonVariants.MINUS}`)
      const plusBtn = bedroomItem.querySelector(`.${buttonVariants.PLUS}`)
      const minusBtnClassList = minusBtn.classList;

      const plusClickHandle = () => {
        if (state.amenities.bedroom !== undefined) {
          text.innerText = state.amenities.bedroom
          if (state.amenities.bedroom > 0) {
            removeDisabledFromMinusBtn(minusBtnClassList)
          }
        }
      }

      const minusClickHandle = () => {
        if (state.amenities.bedroom !== undefined) {
          text.innerText = state.amenities.bedroom
          if (state.amenities.bedroom <= 0 && !minusBtnClassList.contains('button_variant_math_disabled')) {
            addDisabledFromMinusBtn(minusBtnClassList)
          }
        }
      }

      plusBtn.addEventListener('click', plusClickHandle)
      minusBtn.addEventListener('click', minusClickHandle)
    }
  }
}