/**
 * new keyword:
 * 1 Crea un nuovo oggetto,
 * 2 Fa puntare "this" all'oggetto che viene creato e non a window
 * 3 Ritorna il nuovo oggetto
 */

function createPerson(name, surname) {
  return {
    nome: name,
    cognome: surname,
    saluto: function () {
      console.log(`Holaaaa, sono ${this.nome} ${this.cognome}`);
    },
  };
}
