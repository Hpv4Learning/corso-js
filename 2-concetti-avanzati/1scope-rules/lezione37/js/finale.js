// Variable Lookup definisce la direzione univoca con cui javascript "ricerca" il valore contenuto in una varibaile

// Si definisce Call stack l'insieme di processi/routine che sono state invocate ma la cui esecuzione non è terminata.
let nome = "Mario";

//Rischio di errore
function esempio() {
  // let nome = "Michele";
  console.trace("1");

  function inner() {
    let nome = "Gregorio";
    // console.log(nome);
    console.trace("3");
    function gianni() {
      console.trace("4");
    }

    gianni();
  }

  inner();
  console.trace("5");
}

console.trace("0");

esempio();
console.trace("2");
