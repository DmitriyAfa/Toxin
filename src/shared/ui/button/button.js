import { buttonVariants } from "./constants/buttonConstants";

const toggleExpandButtonByEvent = (e) => {
  e.target.classList.toggle(buttonVariants.EXPAND_UP)
}
const moveExpandButtonUp = (btn) => {
  btn.classList.add(buttonVariants.EXPAND_UP)
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
  toggleExpandButtonByEvent,
  moveExpandButtonUp,
  removeDisabledFromMinusBtn,
  addDisabledFromMinusBtn,
  isExpandButton,
  addBtnVisability,
  removeBtnVisability,
  buttonVariants,
}