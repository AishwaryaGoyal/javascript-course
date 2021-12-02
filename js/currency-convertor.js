const toSelect = document.querySelector('[name="to_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toEl = document.querySelector(".to_amount");
const endpoint = "http://api.exchangeratesapi.io/v1/latest";
const accesskey = "?access_key=fa47ea69d9f50f3c561e1bb3e513f6cd";
const ratesByBase = {};
const form = document.querySelector(".app form");

const currencies = {
  USD: "United States Dollar",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  MXN: "Mexican Peso",
  PLN: "Polish Zloty",
};

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join("");
}

async function fetchRates(to = "USD") {
  const res = await fetch(`${endpoint}${accesskey}&symbols=${to}`);
  const { rates } = await res.json();
  return Object.values(rates).join("");
}

async function convert(amount, to) {
  if (!ratesByBase[to]) {
    const rates = await fetchRates(to);
    ratesByBase[to] = rates;
  }
  const convertedAmount = amount * ratesByBase[to];
  return convertedAmount;
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

async function handleInput(e) {
  const rawAmount = await convert(fromInput.value, toSelect.value);
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);
toSelect.innerHTML = optionsHTML;
form.addEventListener("input", handleInput);
handleInput();
