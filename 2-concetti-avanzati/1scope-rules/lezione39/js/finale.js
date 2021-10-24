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

// Operatore Ternario : condizione ? risultato se true : risultato se false
let ternaryNumber = numero > 6 ? 9 : 4;
console.log(ternaryNumber);

//Differenza
if (numero > 6) {
  console.log("true");
}

//Non puoi gestire anche il caso di false
// numero > 6 ? console.log("true");

let ternaryNumber2 =
  numero <= 0
    ? false
    : numero > 0 && numero < 6
    ? "Tra 1 e 5"
    : "maggiore di 6";
console.log(ternaryNumber2);
