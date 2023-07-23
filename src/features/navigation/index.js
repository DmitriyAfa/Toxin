import createNavigation from './navigation';

const navigations = document.querySelectorAll('.js-navigation__item');

if (navigations.length > 0) {
  navigations.forEach((nav) => {
    createNavigation(nav);
  });
}
