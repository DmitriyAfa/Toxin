import createLikeButton from './like';

const likeButtons = document.querySelectorAll('.js-like');

if (likeButtons) {
  likeButtons.forEach((btn) => createLikeButton(btn));
}
