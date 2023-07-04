import { buttonVariants } from "./constants/buttonConstants";

const toggleExpandButton = (e) => {
  e.target.classList.toggle('button_variant_expand-up')
}
const removeDisabledFromMinusBtn = (classList) => {
  classList.remove('button_variant_math_disabled')
}
const addDisabledFromMinusBtn = (classList) => {
  classList.add('button_variant_math_disabled')
}
const removeBtnVisability = (classList) => {
  classList.add('button_visability_hidden')
}
const addBtnVisability = (classList) => {
  classList.remove('button_visability_hidden')
}
const isExpandButton = (classList) => {
  return classList.contains(buttonVariants.EXPAND);
}

export {
  toggleExpandButton,
  removeDisabledFromMinusBtn,
  addDisabledFromMinusBtn,
  isExpandButton,
  addBtnVisability,
  removeBtnVisability,
  buttonVariants,
}