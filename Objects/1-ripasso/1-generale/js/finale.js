//Le principali caratteristiche di un oggetto.

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

vincenzo.saluto(vincenzo.nome);
vincenzo.animaili = [
  {
    nome: "Cleopatra",
    tipo: "Gatto",
  },
  {
    nome: "Enzo",
    tipo: "Cane",
  },
];
console.log(vincenzo["numero-di-telefono"]);
