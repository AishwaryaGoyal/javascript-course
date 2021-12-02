const endpoint = "http://api.exchangeratesapi.io/v1/latest";
const accesskey = "?access_key=fa47ea69d9f50f3c561e1bb3e513f6cd";
const ratesByBase = {};

export async function fetchRates(to = "USD") {
  const res = await fetch(`${endpoint}${accesskey}&symbols=${to}`);
  const { rates } = await res.json();
  return Object.values(rates).join("");
}

export async function convert(amount, to) {
  if (!ratesByBase[to]) {
    const rates = await fetchRates(to);
    ratesByBase[to] = rates;
  }
  const convertedAmount = amount * ratesByBase[to];
  return convertedAmount;
}
