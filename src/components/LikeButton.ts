export default function LikeButton() {
  const likeButtons = document.querySelectorAll<HTMLSpanElement>('.like-button');

  likeButtons.forEach((button) => {
      let liked = false;

      button.addEventListener('click', () => {
          if (!liked) {
              button.innerText = '👍 I like';
              liked = true;
          } else {
              button.innerText = '👍';
              liked = false;
          }
      });
  });
}