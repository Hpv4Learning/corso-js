// className
// classList
const primo = document.querySelector(".primo");
const secondo = document.querySelector(".secondo");
const terzo = document.querySelector(".terzo");

primo.className = "text";
// primo.className = "red";
console.log(primo.className);

secondo.className = "text red";

// terzo.classList.add("red");
// terzo.classList.add("text");
terzo.classList.add("text", "red");
// terzo.classList.remove("red");
terzo.classList.toggle("red");

const result = terzo.classList.contains("red");
console.log(result);

// if (result) {
//   terzo.classList.remove("red");
// } else {
//   terzo.classList.add("red");
// }

console.log(terzo.classList);
