function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider found");
  }

  this.slider = slider;
  this.slides = this.slider.querySelector(".slides");

  const prevButton = this.slider.querySelector(".goToPrev");
  const nextButton = this.slider.querySelector(".goToNext");

  this.startSlider();
  this.applyClasses();

  prevButton.addEventListener("click", () => this.move("back"));
  nextButton.addEventListener("click", () => this.move("forward"));
}

Slider.prototype.startSlider = function () {
  this.current =
    this.slider.querySelector(".current") || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
  this.current.classList.add("current");
  this.prev.classList.add("prev");
  this.next.classList.add("next");
};

Slider.prototype.move = function (direction) {
  this.current.classList.remove("current");
  this.prev.classList.remove("prev");
  this.next.classList.remove("next");

  if (direction === "back") {
    (
      this.prev.previousElementSibling || this.slides.lastElementChild
    ).classList.add("prev");
    this.prev.classList.add("current");
    this.current.classList.add("next");
  } else if (direction === "forward") {
    this.current.classList.add("prev");
    this.next.classList.add("current");
    (
      this.next.nextElementSibling || this.slides.firstElementChild
    ).classList.add("next");
  }
  this.startSlider();
};

const mySlider = new Slider(document.querySelector(".slider"));
const dogSlider = new Slider(document.querySelector(".dog-slider"));

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    dogSlider.move("forward");
  } else if (e.key === "ArrowLeft") {
    dogSlider.move("back");
  }
});
