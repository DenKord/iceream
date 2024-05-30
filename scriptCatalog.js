let cards = document.querySelectorAll(".catalog__block");
let cardsTabs = document.querySelectorAll(".catalog__tab");
let overlay = document.querySelector(".overlay");
let body = document.querySelector(".body");


cards.forEach((card) => {
  card.addEventListener("click", () => {
    overlay.classList.toggle("active");
    body.classList.toggle("active");
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
    body.classList.remove("active");

  });
});

function callback(entry, observer) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('active');
    }
  });
}

let options = {
  root: null,
  rootMargin: "5px",
  threshold: 0.5
 };
let observer = new IntersectionObserver(callback, options);


let elements = document.querySelectorAll('.anim');

elements.forEach( elem =>{
  observer.observe(elem);
})
