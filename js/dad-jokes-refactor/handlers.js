import { fetchJoke } from "./lib.js";
import { jokeButton } from "./dad-jokes-module.js";
import { randomItemFromArray } from "./utils.js";
import buttonText from "./button-text.js";

const loader = document.querySelector(".loader");
const jokeHolder = document.querySelector(".joke p");

export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;

  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}
