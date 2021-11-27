// Valori Falsy
// "", 0, -0,false, undefined, null, NaN

// Tutti i valori hanno un valore booleano anche se il loro tipo non è boolean

const esempio = 2 > 0;

const prova = "Tavolo";

if (prova) {
  console.log("Il valore truthy");
} else {
  console.log("Valore è falsy");
}

// Parentesi su Null e Undefined

// undefined: javascript non ha trovato un valore
// null: indicato dallo sviluppatore che quel valore è nullo

console.log(20 + null);
console.log(20 + undefined);
