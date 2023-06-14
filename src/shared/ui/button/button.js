import { buttonVariants } from "./constants/buttonConstants";

const toggleExpandButton = (classList) => {
  classList.toggle('button_variant_expand-up')
}
const removeDisabledFromMinusBtn = (classList) => {
  classList.remove('button_variant_math_disabled')
}
const addDisabledFromMinusBtn = (classList) => {
  classList.add('button_variant_math_disabled')
}


const isExpandButton = (classList) => {
  return classList.contains(buttonVariants.EXPAND);
}

export { toggleExpandButton, removeDisabledFromMinusBtn, addDisabledFromMinusBtn, isExpandButton, buttonVariants }