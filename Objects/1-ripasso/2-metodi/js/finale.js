//Metodi e proprietà per lavorare con gli oggetti

const vincenzo = {
  nome: "Vincenzo",
  cognome: "Rabbia",
  parenti: {
    genitori: [
      {
        nome: "Elena",
        cognome: "Malizia",
      },
      {
        nome: "Patrizio",
        cognome: "Rabbia",
      },
    ],
    sorelle: [
      {
        nome: "Vanessa",
        cognome: "Rabbia",
      },
    ],
  },
  "numero-di-telefono": 33333333333,
  saluto: function (nome) {
    console.log(`Holaaaa, sono ${nome}`);
  },
};

//Decostruzione oggetti
const {
  nome,
  parenti: { genitori, sorelle: cugini },
} = vincenzo;
console.log(nome, genitori, cugini);

//Decostruzione Array
const [mamma, papa] = genitori;
console.log(mamma, papa);

//Optional Chaining Operator

const hasValue =
  vincenzo &&
  vincenzo.parenti &&
  vincenzo.parenti.genitori &&
  vincenzo.parenti.genitori.genitori;

console.log(hasValue);

let isTrue = vincenzo?.parenti?.genitori?.genitori;
console.log(isTrue);

isTrue = vincenzo?.parenti?.genitori?.genitori;
