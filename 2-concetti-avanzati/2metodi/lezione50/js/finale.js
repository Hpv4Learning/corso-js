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

// const date = new Date();
const date = new Date("07/21/2001");

// console.log(date.getMonth());
let mese = mesi[date.getMonth()];
// console.log(date.getDay());
let giorno = giorni[date.getDay()];
let numero = date.getDate();
let anno = date.getFullYear();

console.log(`Oggi è ${giorno} ${numero} ${mese}, ${anno}`);

