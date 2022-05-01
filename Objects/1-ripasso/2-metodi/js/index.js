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
