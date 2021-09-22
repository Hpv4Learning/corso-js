// Ritornare un valore da una funzione
// function aggiungiValore(numero) {
//   numero++;
//   numero++;
//   numero++;
//   numero++;
//   numero++;
// }

//Una funzione di defualt non ritorna undefined
// const numero = aggiungiValore(5);
// console.log(numero);

//Aggiungendo return ritorneremo un valore
function aggiungiValore(numero) {
  numero++;
  numero++;
  numero++;
  numero++;
  numero++;
  return numero;
}

const risultato = aggiungiValore(5);
console.log(risultato);

//Funzioni per convenzione devono svolgere un compito solo
//Convertitore mph in m/s
function convertMphToKmh(value) {
  return value * 1.60934;
}

function convertKmhToMs(value) {
  return value / 3.6;
}

function convertMphToMs(value) {
  let risultato;
  risultato = convertMphToKmh(value);
  risultato = convertKmhToMs(risultato);
  return `${risultato}m/s;`;
}

const prova = convertMphToMs(500);
console.log(prova);
