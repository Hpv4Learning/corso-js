/**
 * Proprietà del costruttore.
 * Ci permette di risalire alla Costructor Function che ha generato un oggetto
 * Tutti i Tipi di dato hanno un costruttore
 */

function Person(name, surname) {
  this.nome = name;
  this.cognome = surname;
  this.saluto = function () {
    console.log(`Hooolaaa, sono ${this.nome} e amo React js`);
  };
}
