const buttonText = [
  "Ugh.",
  "omg dad",
  "no!",
  "dont tell me",
  "seriosuly",
  "bad one",
  "good one",
  "enough",
  "i like that",
  "go on",
  "yess!!",
  "wow",
  "amazing",
];

const proxy = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://icanhazdadjoke.com";
const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke p");
const loader = document.querySelector(".loader");

async function fetchJoke() {
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

function randomItemFromArray(arr, not) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  if (item === not) return randomItemFromArray(arr, not);
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;

  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}

jokeButton.addEventListener("click", handleClick);
