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

const vincenzo = new Person("Vincenzo", "Rabbia");
// console.log(vincenzo.constructor);

//Tutti i tipi di dato hanno un costruttore
const obj = {};
console.log(obj.constructor);
const arr = [];
console.log(arr.constructor);
function test() {}
console.log(test.constructor);

//Questo oggetto ritorna la constructor function

const valeria = new vincenzo.constructor("Valeria", "Noce");
console.log(valeria);
