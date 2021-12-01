const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.textContent = "One";
ul.appendChild(li1);

const li2 = `<li>Two</li>`;
ul.insertAdjacentHTML("beforeend", li2);

const li3 = document.createElement("li");
li3.innerText = "Three";
ul.insertAdjacentElement("beforeend", li3);

const li4 = document.createElement("li");
li4.textContent = "Four";
li3.insertAdjacentElement("afterend", li4);

const li5 = li4.cloneNode();
li5.textContent = "Five";
li4.append(li5);

document.body.append(ul);
