const acceptBtn = document.querySelector(".accept");
const terms = document.querySelector(".terms-and-conditions");

const observer = new IntersectionObserver(obCallback);
observer.observe(terms.lastElementChild);

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    acceptBtn.disabled = false;
    observer.unobserve(terms.lastElementChild);
  }
}
