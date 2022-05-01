function createPerson(name, surname) {
  return {
    nome: name,
    cognome: surname,
    saluto: function () {
      console.log(`Holaaaa, sono ${this.nome} ${this.cognome}`);
    },
  };
}

const stefania = createPerson("Stefania", "Mollica");
const vincenzo = createPerson("Vincenzo", "Rabbia");
stefania.saluto();
vincenzo.saluto();
