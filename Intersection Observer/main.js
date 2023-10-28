const cardContainer = document.querySelector(".card-container");
const cards = [...document.querySelectorAll(".card")];

// INTERSECTION OBSERVERS
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => isIntersecting(entry));
});

const lastCardIntersectionObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  loadNewCard();
  lastCardIntersectionObserver.unobserve(lastCard.target);
  lastCardIntersectionObserver.observe(
    cardContainer.querySelector(".card:last-child")
  );
});
// OBSERVER ELEMENTS
cards.forEach((card) => intersectionObserver.observe(card));
lastCardIntersectionObserver.observe(
  cardContainer.querySelector(".card:last-child")
);
// FUNCTIONS
const isIntersecting = (entry) => {
  entry.isIntersecting
    ? entry.target.classList.add("show")
    : entry.target.classList.remove("show");
};
const loadNewCard = () => {
  const card = cards[1].cloneNode(true);
  intersectionObserver.observe(card);
  cardContainer.append(card);
};
