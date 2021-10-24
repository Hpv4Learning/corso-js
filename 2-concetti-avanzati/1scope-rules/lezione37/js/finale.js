// Variable Lookup definisce la direzione univoca con cui javascript "ricerca" il valore contenuto in una varibaile

// Si definisce Call stack l'insieme di processi/routine che sono state invocate ma la cui esecuzione non è terminata.
let nome = "Mario";

//Rischio di errore
function esempio() {
  // let nome = 'Michele'

  console.trace("esempio");
  function inner() {
    let nome = "Gregorio";
    console.trace("Inner");
  }

  inner();
  console.trace("esempio");
}

esempio();
