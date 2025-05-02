const favoriteIcon = document.querySelector(".js-favorite-icon");


favoriteIcon.addEventListener("click", (e) => {
  e.target.parentElement.classList.toggle("full");
});