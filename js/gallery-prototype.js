function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No Gallery Found");
  }

  this.gallery = gallery;

  //select the elements we need
  this.images = Array.from(gallery.querySelectorAll("img"));
  this.modal = document.querySelector(".modal");
  this.prevButton = this.modal.querySelector(".prev");
  this.nextButton = this.modal.querySelector(".next");

  //Binding
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  //Event listeners
  this.images.forEach((image) =>
    image.addEventListener("click", (e) => this.showImage(e.currentTarget))
  );

  this.images.forEach((image) => {
    image.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.showImage(e.currentTarget);
      }
    });
  });

  this.modal.addEventListener("click", this.handleClickOutside);
}

Gallery.prototype.openModal = function () {
  if (this.modal.matches(".open")) {
    console.info("Modal already open");
    return;
  }
  this.modal.classList.add("open");

  //Event listeners when modal open
  window.addEventListener("keyup", this.handleKeyUp);
  this.nextButton.addEventListener("click", this.showNextImage);
  this.prevButton.addEventListener("click", this.showPrevImage);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");

  window.removeEventListener("keyup", this.handleKeyUp);
  this.nextButton.removeEventListener("click", this.showNextImage);
  this.prevButton.removeEventListener("click", this.showPrevImage);
};

Gallery.prototype.handleClickOutside = function (e) {
  if (e.currentTarget === e.target) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function (e) {
  if (e.key === "Escape") return this.closeModal();
  if (e.key === "ArrowRight") return this.showNextImage();
  if (e.key === "ArrowLeft") return this.showPrevImage();
};

Gallery.prototype.showNextImage = function () {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function () {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

Gallery.prototype.showImage = function (imageEl) {
  if (!imageEl) {
    console.info("No Image to SHOW!");
    return;
  }
  this.modal.querySelector("img").src = imageEl.src;
  this.modal.querySelector("h2").textContent = imageEl.title;
  this.modal.querySelector("figure p").textContent =
    imageEl.dataset.description;
  this.currentImage = imageEl;
  this.openModal();
};

const gallery1 = new Gallery(document.querySelector(".gallery1"));
const gallery2 = new Gallery(document.querySelector(".gallery2"));
