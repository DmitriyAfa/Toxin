import AirDatepicker from 'air-datepicker';

function makeCalendar(element) {
  new AirDatepicker(element, {
    inline: true,
    range: true,
    multipleDatesSeparator: ' - ',
    selectedDates: [new Date('2019-08-19'), new Date('2019-08-23')],
    buttons: [
      {
        content() {
          return 'очистить';
        },
        async onClick(dp) {
          await dp.clear();
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
  });
}

const calendar = document.querySelector('.js-calendar');

if (calendar !== undefined) {
  makeCalendar(calendar);
}
