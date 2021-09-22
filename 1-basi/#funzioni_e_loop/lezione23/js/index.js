// Le funzioni accettano dei parametri
// E' possibile assengare nomi dei parametri con le stesse regole delle variabili
// I parametri sono trattati all'interno delle funzioni come valori locali
function aggiungiValore(numero) {
  numero++;
  numero++;
  numero++;
  numero++;
  numero++;
  console.log(numero);
}
aggiungiValore(5);

//Essendo parametri locali non possiamo accedervi dall'estrno di un funzione
// console.log(numero);

//Possiamo però assegnare un valore di default ai nostri parametri
//Così da non ottenere mai un errore perché causare un errore
//Bloccherà esecuzione del codice
function sottraiValore(numero = 40) {
  numero--;
  numero--;
  numero--;
  numero--;
  numero--;
  console.log(numero);
}

sottraiValore();
