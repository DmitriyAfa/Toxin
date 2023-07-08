import { buttonVariants, toggleExpandButtonByEvent } from "./button";

const expandButtons = document.querySelectorAll('.' + buttonVariants.EXPAND);

expandButtons.forEach((btn) => {
  btn.addEventListener('click', toggleExpandButtonByEvent)
})