// Le variabili Globali sono accessibili da ogni elemento del codice

// Dichiarare tutte le variabili come globali non è una best practice

/**
 * Ogni volta che definiamo un blocco di codice {} creaiamo uno Scope, ovvero un contesto limitato
 * che ha accesso a tutte le variabili al suo esterno ma non concede l'accesso dall'esterno alle sue variabili
 */

// Il naming in un'applicazione di medie dimensioni non è sostenibile
let name = "Mario";
let name1 = "Sandro";
let name2 = "Daniel";

//Rischio di errore
function esempio() {
  console.log(name1);

  function inner() {
    name1 = "Enzo";
  }
  //Dichiarare una variabile globale in uno scope locale
  name3 = "Piero";
  inner();
}

esempio();
console.log(name1);
console.log(name3);
