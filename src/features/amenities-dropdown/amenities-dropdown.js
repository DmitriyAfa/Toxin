import { buttonVariants } from '@/shared/ui/button/button';
import amenitiesReducer, { incrementBedroom } from './model/slices/amenitiesSlice';
import { dropdowns } from '@/entities/dropdown/dropdown';
import { appDispatch, store } from '@/app/app';


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
      const minusBtn = bedroomItem.querySelector(`.${buttonVariants.MINUS}`)
      const plusBtn = bedroomItem.querySelector(`.${buttonVariants.PLUS}`)
      const plusClickHandle = async () => {
        appDispatch(incrementBedroom())
        const amanitites = await store.getState();
        console.log(amanitites.bedroom)
      }
      plusBtn.addEventListener('click', plusClickHandle)
    }
  }
}

export { amenitiesReducer }