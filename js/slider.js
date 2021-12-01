function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider found");
  }

  let current;
  let prev;
  let next;
  const slides = slider.querySelector(".slides");
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");

  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  function move(direction) {
    current.classList.remove("current");
    prev.classList.remove("prev");
    next.classList.remove("next");

    if (direction === "back") {
      (prev.previousElementSibling || slides.lastElementChild).classList.add(
        "prev"
      );
      prev.classList.add("current");
      current.classList.add("next");
    } else if (direction === "forward") {
      current.classList.add("prev");
      next.classList.add("current");
      (next.nextElementSibling || slides.firstElementChild).classList.add(
        "next"
      );
    }
    startSlider();
  }

  startSlider();
  applyClasses();

  prevButton.addEventListener("click", () => move("back"));
  nextButton.addEventListener("click", () => move("forward"));
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));
