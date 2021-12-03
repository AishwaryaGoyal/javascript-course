import { handleResult } from "./handlers.js";
import { colorsByLength as colors, isDark } from "./colors.js";

const colorsEl = document.querySelector(".colors");

function displayColors() {
  return colors
    .map(
      (color) =>
        `<span class="color ${
          isDark(color) ? "dark" : null
        }" style="background:${color}">${color}</span>`
    )
    .join("");
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  if (!window.SpeechRecognition) {
    console.error("Sorry. Speech Recognition not supported by your browser.");
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors();
