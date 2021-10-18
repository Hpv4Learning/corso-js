// function somma(a, b) {
//   return a + b;
// }

// // console.log(somma(5, 5));
// let risultato = somma(5, 9);
// console.log(risultato);

// function convertMphToMs(value) {
//   let risultato = (value * 1.609) / 3.6;
//   return risultato;
// }

// let convertResult = convertMphToMs(500);

// console.log(convertResult);

function convertMphToKmh(value) {
  return value * 1.609;
}

function convertKmhToMs(value) {
  return value / 3.6;
}

function convertMphToMs(value) {
  let risultato;
  risultato = convertMphToKmh(value);
  risultato = convertKmhToMs(risultato);
  return `${risultato}m/s`;
}

const conversione = convertMphToMs(500);
console.log(conversione);
