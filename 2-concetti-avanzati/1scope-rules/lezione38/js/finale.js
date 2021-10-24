/**
 * FIRST-CLASS FUNCTIONS - Un linguaggio di programmazione dice di avere First-class function quando queste possono essere trattate come ogni altro tipo di dato: possono essere passate come parametro (High-Order && Callback), possono essere ritornate da una funzione (Closure) oppure essere assegnate ad una variabile (function expression)
 */

/**
 * HIGH-ORDER-FUNCTIONS
 * Sono funzioni che accettano tra i loro parametri anche delle funzioni (richiamabili poi al loro interno), oppure funzioni che returnano delle funzioni (CLOSURE)
 */

/**
 * CALLBACK FUNCTION
 * Funzioni che vengono passate come parametro ad un'altra funzione per essere richiamate all'interno
 */

function validator(a, b) {
  return typeof a === "number" && typeof b === "number";
}

function absoluteValue(number) {
  if (number < 0) {
    return Math.abs(number);
  }
  return number;
}

function sottrazione(a, b, validator, absoluter) {
  const areNumbers = validator(a, b);
  if (areNumbers) {
    return absoluter(a - b);
  }
  return "Non sono numeri";
}

let risultato = sottrazione(5, 6, validator, absoluteValue);
console.log(risultato);
