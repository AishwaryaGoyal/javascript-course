import { generateOptions } from "./utils.js";
import currencies from "./currencies.js";
import { handleInput } from "./handlers.js";

export const fromInput = document.querySelector('[name="from_amount"]');
export const toSelect = document.querySelector('[name="to_currency"]');
export const toEl = document.querySelector(".to_amount");
const form = document.querySelector(".app form");

const optionsHTML = generateOptions(currencies);
toSelect.innerHTML = optionsHTML;

form.addEventListener("input", handleInput);

//On page load also show the converted amount
handleInput();
