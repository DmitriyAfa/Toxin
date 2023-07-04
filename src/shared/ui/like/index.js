import { makeLike } from "./like";

const likeButtons = document.querySelectorAll('.js-like');

if (likeButtons) {
  likeButtons.forEach((btn) => makeLike(btn))
}