// Le variabili Globali sono accessibili da ogni elemento del codice

// Le variabili Locali possono avere il medesimo nome di una variabile globale

// Le keywords const e let definiscono lo scope - senza dichiariamo una variabile globale

/**
 * Ogni volta che definiamo un blocco di codice {} creaiamo uno Scope, ovvero un contesto limitato
 * che ha accesso a tutte le variabili al suo esterno ma non concede l'accesso dall'esterno alle sue variabili
 */

let nome = "Mario";
let globalNumber = 6;

//Rischio di errore
function esempio() {
  let nome = "Sandro";
  let risultato = 12 + globalNumber;

  console.log(`${nome} ha ${risultato}€`);

  function inner() {
    let nome = "Enzo";
    nome = "Giorgio";
    let globalNumber = 40;

    let multiplo = risultato * globalNumber;
    console.log(`${nome} ha ${multiplo}€`);
  }

  inner();
}

// console.log(multiplo)

{
  let azienda = "Ikea";
}

// console.log(azienda)

esempio();

console.log(nome);
