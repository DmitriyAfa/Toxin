import { dropdowns } from '@/entities/dropdown/dropdown';
import { makeDropdownFunctional } from '../../entities/dropdown/dropdown';
import { makeGuestsText } from './lib/makeGuestsText';


if (dropdowns) {
  const name = 'guests'

  dropdowns.forEach((dropdown) => {
    if (dropdown.dataset.name === name) {
      makeDropdownFunctional({
        dropdown,
        name,
        makeInputTextCallback: makeGuestsText,
      })
    }
  })
}