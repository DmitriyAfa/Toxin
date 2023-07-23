const createLikeButton = (like) => {
  const text = like.querySelector('.js-like__text');
  let counter = +text.innerText;

  const likeHabdler = () => {
    like.classList.toggle('like_active');
    if (like.classList.contains('like_active')) {
      text.innerText = ++counter;
    } else {
      text.innerText = --counter;
    }
  };

  like.addEventListener('click', likeHabdler);
};

export default createLikeButton;
