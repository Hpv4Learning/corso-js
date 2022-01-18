// submit event
// prevent default

const form = document.querySelector("#form");
const nome = document.querySelector("#name");
const password = document.querySelector("#password");

// nome.addEventListener("keyup", function (e) {
//   console.log(e.currentTarget.value);
// });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(nome.value);
  console.log(password.value);
});
