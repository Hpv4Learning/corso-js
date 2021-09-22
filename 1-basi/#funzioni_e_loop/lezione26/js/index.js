//Conditional Statements
// >, >=, <, <=, ==, ===, !=, !==

//Sempre eseguito - Tra le parentesi deve esserci true o false
if (true) {
  console.log("Ciao sono un conditional Statements");
}

//Else
if (3 > 1) {
  console.log("Vero");
} else {
  console.log("Falso");
}

//Posso usare un Variabile
const isGreater = 3 >= 5;

//Questo ritorna un valore, non fa si che venga valutata questa condizione nello statement
//Attenzione, qui non stiamo dicendo "se è false allora fai questo". In caso che vnega ritornato
//True eseguiremo il primo codice altrimenti il secondo. MOLTO IMPORTANTE
if (isGreater) {
  console.log("Vero");
} else {
  console.log("Falso");
}
