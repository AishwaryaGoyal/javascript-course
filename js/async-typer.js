function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min, max, randomNo = Math.random()) {
  return randomNo * (max - min) + min;
}

//Using async-await
async function draw(el) {
  const text = el.textContent;
  let soFar = "";
  const time = getRandomBetween(el.dataset.typeMin, el.dataset.typeMax);
  console.log(time);

  for (const letter of text) {
    soFar += letter;
    el.textContent = soFar;
    await wait(time);
  }
}

document.querySelectorAll("[data-type]").forEach((el) => draw(el));

/*
//Using Recursion

document.querySelectorAll("[data-type]").forEach((el) => drawRec(el));

function drawRec(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  drawLetter();
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index = index + 1;
    await wait(getRandomBetween(typeMin, typeMax));
    if (index <= text.length) {
      drawLetter();
    }
  }
}
*/
