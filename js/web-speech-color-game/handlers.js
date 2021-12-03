import { isValidColor } from "./colors.js";

export function handleResult({ results }) {
  const len = results.length;
  const words = results[len - 1][0].transcript;

  let color = words.toLowerCase();
  color = color.replace(/\s/g, "");

  if (isValidColor(color)) {
    console.log("Its a valid color ", color);
    document.body.style.backgroundColor = color;

    //Pop out the color
    const spans = Array.from(document.querySelectorAll("span"));

    const spoken = spans.find((el) => el.textContent === color);
    spoken.classList.add("spoken");
  } else {
    return;
  }
}
