function makeNavigation(item) {
  const button = item.querySelector('.js-navigation__button')
  console.log(button)
  if (button !== null) {
    const list = item.querySelector('.js-navigation__sub-list')

    const buttonHandler = () => {
      list.classList.toggle('navigation__sub-list_hide')
    }

    button.addEventListener('click', buttonHandler)
  }
}

export { makeNavigation }