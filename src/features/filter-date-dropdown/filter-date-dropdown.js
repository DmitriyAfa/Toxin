import AirDatepicker from 'air-datepicker';
import { filterDateDropdownTypes } from './lib/constans';
import { isExpandButton } from '@/shared/ui/button/button';

function makeFilterDateDropdown(dropdown) {
  let $start, $end;
  let startExpandButton, endExpandButton;
  let elements = dropdown.querySelectorAll('.js-dropdown')

  elements.forEach((elem) => {
    const btn = elem.querySelector('.js-button')
    if (elem.dataset.name === 'start') {
      $start = elem
      startExpandButton = btn
    }
    if (elem.dataset.name === 'end') {
      $end = elem
      endExpandButton = btn
    }
  })

  $start = $start.querySelector('.js-input')
  $end = $end.querySelector('.js-input')

  let dpMin, dpMax;

  dpMin = new AirDatepicker($start, {
    onSelect({ date }) {
      console.log($start)
      dpMax.update({
        minDate: date,
      })
    },
  })

  dpMax = new AirDatepicker($end, {
    onSelect({ date }) {
      dpMin.update({
        maxDate: date
      })
    }
  })

  const startExpandBtnHandller = (e) => {
    const classList = e.target.classList;
    if (classList.contains('button_variant_expand-up')) {
      dpMin.show()
      endExpandButton.classList.toggle('button_variant_expand-up')
    } else {
      dpMin.hide()
      endExpandButton.classList.toggle('button_variant_expand-up')
    }
  }

  const endExpandBtnHandller = (e) => {
    const classList = e.target.classList;
    if (classList.contains('button_variant_expand-up')) {
      dpMin.show()
      startExpandButton.classList.toggle('button_variant_expand-up')
    } else {
      dpMin.hide()
      startExpandButton.classList.toggle('button_variant_expand-up')
    }
  }


  startExpandButton.addEventListener('click', startExpandBtnHandller)

  endExpandButton.addEventListener('click', endExpandBtnHandller)

}

const dropdowns = document.querySelectorAll('.' + filterDateDropdownTypes.DROPDOWN)
if (dropdowns.length !== 0) {
  dropdowns.forEach((dropdown) => {
    makeFilterDateDropdown(dropdown)
  })
}