const card = document.querySelector(".card__text");
const toggle = document.querySelector(".card__toggle")
const gradient = document.querySelector(".gradient")

toggle.onclick = function () {
  card.classList.toggle('active');
  toggle.classList.toggle('active');
  setTimeout(() => {
    gradient.classList.toggle('active');
  }, 150)
}
