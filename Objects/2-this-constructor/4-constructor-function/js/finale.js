/**
 * new keyword:
 * 1 Crea un nuovo oggetto,
 * 2 Fa puntare "this" all'oggetto che viene creato e non a window
 * 3 Ritorna il nuovo oggetto
 */

function Person(name, surname) {
  this.nome = name;
  this.cognome = surname;
  this.saluto = function () {
    console.log(`Hooolaaa, sono ${this.nome} e amo React js`);
  };
}

const vincenzo = new Person("Vincenzo", "Rabbia");
const stefania = new Person("Stefania", "Mollica");
const sandro = Person("Sandro", "Petruzzi");
console.log(sandro);

vincenzo.saluto();

// function createPerson(name, surname) {
//   return {
//     nome: name,
//     cognome: surname,
//     saluto: function () {
//       console.log(`Holaaaa, sono ${this.nome} ${this.cognome}`);
//     },
//   };
// }
