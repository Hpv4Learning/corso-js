/*
 * This Object - Rappresenta l'elemento su cui viene richiamato, non quello in cui viene definitio
 * Quindi fa sempre rifarimento al elemento a sinistra del . su cui viene chiamato
 */

const vincenzo = {
  nome: "Vincenzo",
  cognome: "Rabbia",
  saluto: saluto,
};

const stefania = {
  nome: "Stefania",
  cognome: "Mollica",
  saluto: saluto,
};

function saluto() {
  console.log(`Hooolaaaaaa sono ${this.nome}`);
}

stefania.saluto();
vincenzo.saluto();

function workWithThis() {
  console.log(this);
  // this.r = 56
  // return this
}

// const workWithThis = function () {
//   console.log(this);
//   // this.r = 56
//   // return this
// };

const btn = document.getElementById("btn");
// btn.addEventListener("click", workWithThis);
btn.addEventListener("click", function () {
  workWithThis();
});

// workWithThis();

// console.log(workWithThis() === window);
// console.log(window.r);

// console.log(stefania.r);
