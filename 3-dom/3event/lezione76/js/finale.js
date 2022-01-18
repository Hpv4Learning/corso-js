// Event Object
// Informazioni sull'evento triggerato
// Accedere all'elemento dal quale viene triggerato l'evento
// preventDefault()

const btn = document.getElementById("btn");
const heading = document.querySelector("h1");
const link = document.getElementById("link");

heading.addEventListener("mouseenter", function (event) {
  // heading.classList.add("orange");
  event.currentTarget.classList.add("orange");

  console.log(event.currentTarget);
});

function hanldeclick(e) {
  console.log(e.currentTarget);
}

btn.addEventListener("click", hanldeclick);

link.addEventListener("click", (e) => {
  e.preventDefault();
});
