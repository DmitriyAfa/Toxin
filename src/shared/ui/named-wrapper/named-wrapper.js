import { buttonVariants, moveExpandButtonUp } from "../button/button"

const toggleNamedWrapperContent = (item) => {
  const content = item.querySelector('.js-named-wrapper__content')
  const button = item.querySelector('.js-named-wrapper__button')

  if (button) {
    const buttonHandler = () => {
      content.classList.toggle('named-wrapper__content_hide')
    }

    const expandBtnFromShared = item.querySelector('.' + buttonVariants.EXPAND)
    if (!content.classList.contains('named-wrapper__content_hide')) {
      moveExpandButtonUp(expandBtnFromShared)
    }

    button.addEventListener('click', buttonHandler)
  }
}

export { toggleNamedWrapperContent };