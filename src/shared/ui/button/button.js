import { buttonVariants } from "./constants/buttonConstants";

const toggleExpandButton = (classList) => {
  classList.toggle('button_variant_expand-up')
}
const toggleMinusButton = (classList) => {
  classList.toggle('example1212eqw')
}

const isExpandButton = (classList) => {
  return classList.contains(buttonVariants.EXPAND);
}

export { toggleExpandButton, toggleMinusButton, isExpandButton, buttonVariants }