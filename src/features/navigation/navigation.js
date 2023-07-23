function createNavigation(item) {
  const button = item.querySelector('.js-navigation__button');
  if (button !== null) {
    const list = item.querySelector('.js-navigation__sub-list');

    const buttonHandler = () => {
      list.classList.toggle('navigation__sub-list_hide');
    };

    button.addEventListener('click', buttonHandler);
  }
}

export default createNavigation;
