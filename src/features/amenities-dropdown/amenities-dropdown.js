import { dropdowns, createDropdownFunctional } from '@/entities/dropdown/dropdown';
import createAmenitiesText from './lib/createAmenitiesText';

if (dropdowns) {
  const name = 'amenities';

  dropdowns.forEach((dropdown) => {
    if (dropdown.dataset.name === name) {
      createDropdownFunctional({
        dropdown,
        createInputTextCallback: createAmenitiesText,
        name,
      });
    }
  });
}
