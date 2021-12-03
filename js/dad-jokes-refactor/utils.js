export function randomItemFromArray(arr, not) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  if (item === not) return randomItemFromArray(arr, not);
  return item;
}
