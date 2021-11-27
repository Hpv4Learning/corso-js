// Variable Lookup definisce la direzione univoca con cui javascript "ricerca" il valore contenuto in una varibaile

// Si definisce Call stack l'insieme di processi/routine che sono state invocate ma la cui esecuzione non è terminata.
let nome = "Mario";

//Rischio di errore
function esempio() {
  function inner() {}

  inner();
}

esempio();
