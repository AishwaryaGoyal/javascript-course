const textarea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");

textarea.addEventListener("input", (e) => handleInput(e.target.value));

function handleInput(text) {
  const mod = Array.from(text).map(sarcastic).join("");
  result.textContent = mod;
}

function sarcastic(letter, index) {
  if (index % 2) {
    return letter.toUpperCase();
  }
  return letter.toLowerCase();
}
