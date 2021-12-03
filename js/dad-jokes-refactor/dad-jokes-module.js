import { handleClick } from "./handlers.js";

export const jokeButton = document.querySelector(".getJoke");

jokeButton.addEventListener("click", handleClick);
