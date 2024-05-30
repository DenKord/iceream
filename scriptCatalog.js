let cards = document.querySelectorAll(".catalog__block");
let cardsTabs = document.querySelectorAll(".catalog__tab");
let overlay = document.querySelector(".overlay");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    overlay.classList.toggle("active");
  });
});

for (let i = 0; i < 12; i++) {
  cards[i].addEventListener("click", () => {
    cardsTabs[i].classList.toggle("active");
  });
}

overlay.addEventListener("click", () => {
  overlay.classList.toggle("active");
  cardsTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
});

