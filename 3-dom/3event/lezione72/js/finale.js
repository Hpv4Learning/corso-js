//1- Seleziona elemento
//2- Seleziona il trigger
//3- Gestisci l'evento

const btn = document.getElementById("btn");
const heading = document.querySelector("h1");
let number = 0;

const addHeading = function () {
  const title = document.createElement("h3");
  number++;
  title.innerText = `sono il div numero ${number}`;
  document.body.appendChild(title);
};

btn.addEventListener("click", function () {
  heading.classList.toggle("orange");
  if (number < 5) {
    addHeading();
  }
});
