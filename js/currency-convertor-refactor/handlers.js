import { convert } from "./lib.js";
import { fromInput, toSelect, toEl } from "./currency-convertor-modules.js";
import { formatCurrency } from "./utils.js";

export async function handleInput(e) {
  const rawAmount = await convert(fromInput.value, toSelect.value);
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
