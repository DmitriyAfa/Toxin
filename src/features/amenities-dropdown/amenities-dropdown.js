import { dropdowns, makeDropdownFunctional } from '@/entities/dropdown/dropdown';
import { makeAmenitiesText } from './lib/makeAmenitiesText';


if (dropdowns) {
  const name = 'amenities'

  dropdowns.forEach((dropdown) => {
    if (dropdown.dataset.name === name) {
      makeDropdownFunctional({
        dropdown,
        makeInputTextCallback: makeAmenitiesText,
      })
    }
  })
}