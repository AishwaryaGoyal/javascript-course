const cardButtons = document.querySelectorAll(".card button");
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");

  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;

  modalInner.innerHTML = `<img src="${imgSrc.replace("200", "600")}" />
  <p>${desc}</p>`;
  modalOuter.classList.add("open");
}
cardButtons.forEach((cardButton) =>
  cardButton.addEventListener("click", handleCardButtonClick)
);

modalOuter.addEventListener("click", clickedOutside);

function clickedOutside(event) {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    modalOuter.classList.remove("open");
  }
}

window.addEventListener("keyup", escapekeyPressed);

function escapekeyPressed(event) {
  if (event.key === "Escape") {
    modalOuter.classList.remove("open");
  }
}
