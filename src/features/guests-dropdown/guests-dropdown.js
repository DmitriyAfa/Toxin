import { dropdowns } from '@/entities/dropdown/dropdown';
import { createDropdownFunctional } from '../../entities/dropdown/dropdown';
import makeGuestsText from './lib/makeGuestsText';

if (dropdowns) {
  const name = 'guests';

  dropdowns.forEach((dropdown) => {
    if (dropdown.dataset.name === name) {
      createDropdownFunctional({
        dropdown,
        name,
        createInputTextCallback: makeGuestsText,
      });
    }
  });
}
