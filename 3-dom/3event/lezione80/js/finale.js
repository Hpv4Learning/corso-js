// submit event
// prevent default

const form = document.querySelector("#form");
const nome = document.querySelector("#name");
const password = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(nome.value);
  console.log(password.value);
});
