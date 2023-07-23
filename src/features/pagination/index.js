import createPagination from './pagination';

const paginations = document.querySelectorAll('.js-pagination');

if (paginations) {
  paginations.forEach((pagination) => {
    createPagination(pagination);
  });
}
