import { buttonVariants, toggleExpandButton } from "./button";

const expandButtons = document.querySelectorAll('.' + buttonVariants.EXPAND);

expandButtons.forEach((btn) => {
  btn.addEventListener('click', toggleExpandButton)
})
