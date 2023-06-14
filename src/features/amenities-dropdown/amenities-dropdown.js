import { buttonVariants } from '@/shared/ui/button/button';
import amenitiesReducer, { decrementBedroom, incrementBedroom } from './model/slices/amenitiesSlice';
import { dropdowns } from '@/entities/dropdown/dropdown';
import { appDispatch, store } from '@/app/app';
import { toggleMinusButton } from '@/shared/ui/button/button';


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

      const plusClickHandle = () => {
        appDispatch(incrementBedroom())
        const state = store.getState();
        if (state.amenities.bedroom !== undefined) {
          text.innerText = state.amenities.bedroom
        }
      }

      const minusClickHandle = (e) => {
        e.target.preventDefault;
        appDispatch(decrementBedroom())
        const state = store.getState();
        const minusClasslist = e.target.classList;
        if (state.amenities.bedroom !== undefined) {
          text.innerText = state.amenities.bedroom
          console.log(minusBtn.classList)
        }
      }

      plusBtn.addEventListener('click', plusClickHandle)
      minusBtn.addEventListener('click', 'tr', minusClickHandle)
    }
  }
}

export { amenitiesReducer }