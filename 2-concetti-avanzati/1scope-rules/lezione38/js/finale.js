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

function validetor(a, b) {
  return typeof a === "number" && typeof b === "number";
}

function minore50(a, b) {
  return a + b < 50;
}

function absoluteValue(number) {
  if (number < 0) {
    return Math.abs(number);
  }

  return number;
}

function sottrazione(a, b, callback1, callback2) {
  const areNumbers = callback1(a, b);
  if (areNumbers) {
    return callback2(a - b);
  }

  return "Validazione non superata";
}

let risultato = sottrazione(5, 6, validetor, absoluteValue);
risultato = sottrazione(25, 50, minore50, absoluteValue);

console.log(risultato);
