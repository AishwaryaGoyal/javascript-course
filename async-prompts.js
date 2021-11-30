function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function destroyPopup(popup) {
  popup.classList.remove("open");
  await wait(1000);
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async (resolve) => {
    //create a popup with all fields in it'
    const popup = document.createElement("form");
    popup.classList.add("popup");
    popup.insertAdjacentHTML(
      "afterbegin",
      `<fieldset>
       <label>${options.title}</label>
       <input type="text" name="input"/>
       <button type="submit">Submit</button>
       </fieldset>`
    );
    console.log(popup);

    //check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement("button");
      skipButton.type = "button";
      skipButton.textContent = "Cancel";
      popup.firstElementChild.append(skipButton);

      skipButton.addEventListener(
        "click",
        function () {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }

    document.body.appendChild(popup);
    await wait(20);
    popup.classList.add("open");

    //listen for submit event on inputs
    popup.addEventListener(
      "submit",
      function (e) {
        e.preventDefault();
        resolve(e.target.input.value);
        destroyPopup(popup);
      },
      { once: true }
    );
  });
}

const btns = Array.from(document.getElementsByClassName("askMe"));
btns.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const button = e.currentTarget;
    const answer = await ask({
      title: button.dataset.question,
      cancel: "cancel" in button.dataset,
    });
    console.log(answer);
  });
});

const questions = [
  { title: "What is your name?" },
  { title: "What is your age?" },
  { title: "What is your dog's name?", cancel: true },
];

async function askMany() {
  for (const question of questions) {
    const answer = await ask(question);
    console.log(answer);
  }
}

askMany();
