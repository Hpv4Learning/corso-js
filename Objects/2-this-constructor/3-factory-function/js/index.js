const vincenzo = {
  nome: "Vincenzo",
  cognome: "Rabbia",
  saluto: function () {
    console.log(`Holaaaa, sono ${this.nome} ${this.cognome}`);
  },
};

const stefania = {
  nome: "Stefania",
  cognome: "Mollica",
  saluto: function () {
    console.log(`Holaaaa, sono ${this.nome} ${this.cognome}`);
  },
};

stefania.saluto();
vincenzo.saluto();
