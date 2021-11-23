// Make a div
const div = document.createElement("div");

// add a class of wrapper to it
div.classList.add("wrapper");

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement("ul");

// add three list items with the words "one, two, three" in them
const li1 = document.createElement("li");
li1.textContent = "one";
const li2 = document.createElement("li");
li2.textContent = "two";
const li3 = document.createElement("li");
li3.textContent = "three";
ul.append(li1);
ul.append(li2);
ul.append(li3);
// put that list into the above wrapper
div.appendChild(ul);

// create an image
const image = document.createElement("img");
// set the source to an image
image.src = "https://source.unsplash.com/random/200";
// set the width to 250
image.width = "250";
// add a class of cute
image.classList.add("cute");
// add an alt of Cute Puppy
image.alt = "Cute Puppy";
// Append that image to the wrapper
div.append(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const divNew = `<div class="myDiv">
<p>Para 1</p>
<p>Para 2</p>
</div>`;
ul.insertAdjacentHTML("beforebegin", divNew);

// add a class to the second paragraph called warning
const myDiv = document.querySelector(".myDiv");
myDiv.children[1].classList.add("warning");

// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  return `<div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    <button type="button" class="delete">&times; Delete</button>
    </div>`;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS.
// That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const newDiv = document.createElement("div");
newDiv.classList.add("cards");

// make 4 player cards using generatePlayerCard
const playerCard1 = generatePlayerCard("Bill", 21, 5);
const playerCard2 = generatePlayerCard("Aish", 29, 5.7);
const playerCard3 = generatePlayerCard("John", 18, 5.8);
const playerCard4 = generatePlayerCard("Aim", 41, 5.4);

// append those cards to the div
newDiv.insertAdjacentHTML("afterbegin", playerCard1);
newDiv.insertAdjacentHTML("beforeend", playerCard2);
playerCard3New = document.createRange().createContextualFragment(playerCard3);
newDiv.appendChild(playerCard3New);
newDiv.insertAdjacentHTML("beforeend", playerCard4);

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", newDiv);

const buttons = document.querySelectorAll(".delete");

function deleteCard(event) {
  event.currentTarget.parentElement.remove();
}

buttons.forEach((button) => button.addEventListener("click", deleteCard));

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
