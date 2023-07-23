import AirDatepicker from 'air-datepicker';
import dateDropdownTypes from './lib/constans';

function createDateDropdowns(element) {
  let $start; let
    $end;
  let startExpandButton; let
    endExpandButton;
  const dropdowns = element.querySelectorAll('.js-dropdown');

  dropdowns.forEach((elem) => {
    const btn = elem.querySelector('.js-button');
    if (elem.dataset.name === 'start') {
      $start = elem;
      startExpandButton = btn;
    }
    if (elem.dataset.name === 'end') {
      $end = elem;
      endExpandButton = btn;
    }
  });

  $start = $start.querySelector('.js-input');
  $end = $end.querySelector('.js-input');

  const startDate = element.dataset.start;
  const endDate = element.dataset.end;

  const dpMin = new AirDatepicker($start, {
    onSelect({ formattedDate, datepicker }) {
      if (formattedDate.length === 0) {
        datepicker.$el.value = '';
        dpMax.$el.value = '';
        return;
      }

      datepicker.$el.value = formattedDate[0];
      if (formattedDate[1]) {
        dpMax.$el.value = formattedDate[1];
      } else {
        dpMax.$el.value = '';
      }
    },
    multipleDatesSeparator: ' - ',
    range: true,
    buttons: [
      {
        content() {
          return 'очистить';
        },
        async onClick(dp) {
          await dpMin.clear();
          dp.$el.value = '';
        },
      },
      {
        content() {
          return 'применить';
        },
        onClick() {
        },
      },
    ],
    selectedDates: [new Date(startDate)],
  });

  const dpMax = new AirDatepicker($end, {
    selectedDates: [new Date(endDate)],
  });

  const startExpandBtnHandller = (e) => {
    const { classList } = e.target;
    if (classList.contains('button_variant_expand-up')) {
      dpMin.show();
      endExpandButton.classList.toggle('button_variant_expand-up');
    } else {
      dpMin.hide();
      endExpandButton.classList.toggle('button_variant_expand-up');
    }
  };

  const endExpandBtnHandller = (e) => {
    const { classList } = e.target;
    if (classList.contains('button_variant_expand-up')) {
      dpMin.show();
      startExpandButton.classList.toggle('button_variant_expand-up');
    } else {
      dpMin.hide();
      startExpandButton.classList.toggle('button_variant_expand-up');
    }
  };

  startExpandButton.addEventListener('click', startExpandBtnHandller);
  endExpandButton.addEventListener('click', endExpandBtnHandller);
}

const createFilterDateDropdown = (element) => {
  const dropdown = element.querySelector('.js-dropdown');
  const input = dropdown.querySelector('.js-input');
  const expandBtn = dropdown.querySelector('.js-button');

  const datePicker = new AirDatepicker(input, {
    onSelect({ date, datepicker }) {
      let localedDate = date.toLocaleString('ru', {
        day: '2-digit',
        month: 'short',
      });
      localedDate = localedDate.split(',');
      localedDate = localedDate.map((ld) => ld.slice(0, -1));
      if (localedDate[1]) {
        datepicker.$el.value = `${localedDate[0]} - ${localedDate[1]}`;
      } else {
        datepicker.$el.value = localedDate[0];
      }
    },
    range: true,
    multipleDatesSeparator: ' - ',
    buttons: [
      {
        content() {
          return 'очистить';
        },
        async onClick(dp) {
          dp.clear();
        },
      },
      {
        content() {
          return 'применить';
        },
        onClick() {
        },
      },
    ],
  });

  const expandBtnHandller = (e) => {
    const { classList } = e.target;
    if (classList.contains('button_variant_expand-up')) {
      datePicker.show();
    } else {
      datePicker.hide();
    }
  };

  expandBtn.addEventListener('click', expandBtnHandller);
};

const dropdowns = document.querySelectorAll(`.${dateDropdownTypes.DROPDOWN}`);
if (dropdowns.length !== 0) {
  dropdowns.forEach((dropdown) => {
    const { name } = dropdown.dataset;
    if (name === dateDropdownTypes.DATE) {
      createDateDropdowns(dropdown);
    }
    if (name === dateDropdownTypes.FILTER) {
      createFilterDateDropdown(dropdown);
    }
  });
}
