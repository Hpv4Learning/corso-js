/**
 * Operatore Ternario è un espressione che si serve di tre parametri per simulare il comportamento di un if statement.
 * La differenza sostanziale è che un operatore ternario, essendo un espressione, deve sempre ritornare un valore.
 */

const numero = 5;
let conditionalNumber;

if (numero > 6) {
  conditionalNumber = 9;
} else {
  conditionalNumber = 4;
}

let ternaryNumber = numero > 6 ? 9 : 4;

console.log(ternaryNumber);

if (numero > 3) {
  console.log("true");
}

numero > 3 ? console.log("true") : console.log("false");

let ternaryNumber2 =
  numero <= 0
    ? false
    : numero > 0 && numero < 6
    ? "tra 1 e 5"
    : "maggiore di 6";

console.log(ternaryNumber2);
