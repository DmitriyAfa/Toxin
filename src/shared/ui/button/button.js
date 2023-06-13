import { buttonVariants } from "./constants/buttonConstants";

const toggleExpandButton = (classList) => {
  classList.toggle('button_variant_expand-up')
}

const isExpandButton = (classList) => {
  return classList.contains(buttonVariants.EXPAND);
}

export { toggleExpandButton, isExpandButton, buttonVariants }