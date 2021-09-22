const isGreater = 3 >= 5;
//Questo ritorna un valore, non fa si che venga valutata questa condizione nello statement
//Attenzione, qui non stiamo dicendo "se è false allora fai questo". In caso che vnega ritornato
//True eseguiremo il primo codice altrimenti il secondo. MOLTO IMPORTANTE
if (isGreater) {
  console.log("Vero");
} else {
  console.log("Falso");
}

function isGreaterThen10(params) {
  if (typeof params === "number") {
    return params > 10;
  } else {
    return false;
  }
}

//Possiamo usare anche una funzione
// if (isGreaterThen10(20) ) {
//   console.log("E' maggiore di 10");
// } else {
//   console.log("Non è maggiore di 10");
// }

if (isGreaterThen10(9)) {
  console.log("9 maggiore di 10");
} else if (isGreaterThen10(5)) {
  console.log("50 è maggiore di 10");
} else {
  console.log("Nessun Valore Maggiore di 10 trovato");
}
