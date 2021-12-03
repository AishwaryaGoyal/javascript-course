import { jokeButton } from "./dad-jokes-module.js";

const proxy = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://icanhazdadjoke.com";

export async function fetchJoke(loader) {
  //Turn loader on
  loader.classList.remove("hidden");
  jokeButton.classList.add("hidden");
  const response = await fetch(`${proxy}${endpoint}`, {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();
  //Turn loader off
  loader.classList.add("hidden");
  jokeButton.classList.remove("hidden");
  return data;
}
