import { makePagination } from "./pagination"

const paginations = document.querySelectorAll('.js-pagination')

if (paginations) {
  paginations.forEach((pagination) => {
    makePagination(pagination)
  })
}