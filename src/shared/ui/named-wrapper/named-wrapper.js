const toggleNamedWrapperContent = (item) => {
  const content = item.querySelector('.js-named-wrapper__content')
  const button = item.querySelector('.js-named-wrapper__button')

  if (button) {
    const buttonHandler = () => {
      content.classList.toggle('named-wrapper__content_hide')
    }

    button.addEventListener('click', buttonHandler)
  }
}

export { toggleNamedWrapperContent };