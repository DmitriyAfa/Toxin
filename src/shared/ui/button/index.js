import { buttonVariants, preventDefaultButton, toggleExpandButtonByEvent } from './button';

const buttons = document.querySelectorAll('.js-button');
const expandButtons = document.querySelectorAll(`.${buttonVariants.EXPAND}`);

buttons.forEach((btn) => {
  if (btn.dataset.name !== 'submit' && btn.dataset.name !== 'link') {
    btn.addEventListener('click', preventDefaultButton);
  }
});

expandButtons.forEach((btn) => {
  btn.addEventListener('click', toggleExpandButtonByEvent);
});
