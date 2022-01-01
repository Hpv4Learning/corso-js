// Date
// Oggetto che permette di lavorare con le date

const mesi = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const giorni = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venderdì",
  "Sabato",
];

const data = new Date(Date.now());
console.log(data);
let mese = mesi[data.getMonth()];
let giorno = giorni[data.getDay()];
let numero = data.getDate();
let anno = data.getFullYear();

console.log(`oggi è ${giorno} ${numero} ${mese}, ${anno}`);
// console.log(data.getDate())
// console.log(data.getDay())
// console.log(data.getFullYear())

// console.log(mesi[data.getMonth()])

