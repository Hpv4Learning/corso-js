/*
 * This Object - Rappresenta l'elemento su cui viene richiamato, non quello in cui viene definitio
 * Quindi fa sempre rifarimento al elemento a sinistra del . su cui viene chiamato
 */
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
