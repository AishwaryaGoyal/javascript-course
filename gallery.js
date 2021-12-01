function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No Gallery Found");
  }

  //select the elements we need
  const images = Array.from(gallery.querySelectorAll("img"));
  const modal = document.querySelector(".modal");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");
  let currentImage;

  function openModal() {
    if (modal.matches(".open")) {
      console.info("Modal already open");
      return;
    }
    modal.classList.add("open");

    window.addEventListener("keyup", handleKeyUp);
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);
  }

  function closeModal() {
    modal.classList.remove("open");

    window.removeEventListener("keyup", handleKeyUp);
    nextButton.removeEventListener("click", showNextImage);
    prevButton.removeEventListener("click", showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === "Escape") return closeModal();
    if (e.key === "ArrowRight") return showNextImage();
    if (e.key === "ArrowLeft") return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(imageEl) {
    if (!imageEl) {
      console.info("No Image to SHOW!");
      return;
    }
    console.log(imageEl);
    modal.querySelector("img").src = imageEl.src;
    modal.querySelector("h2").textContent = imageEl.title;
    modal.querySelector("figure p").textContent = imageEl.dataset.description;
    currentImage = imageEl;
    openModal();
  }

  images.forEach((image) =>
    image.addEventListener("click", (e) => showImage(e.currentTarget))
  );

  images.forEach((image) => {
    image.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener("click", handleClickOutside);
}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));
