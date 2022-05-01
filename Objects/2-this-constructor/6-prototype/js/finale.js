/**
 * Il Prototype ci permette di definire dei metodi che vengono ereditati da tutte le istanze che creiamo
 * Questo ci permette di avere dei metodi in comune e di non inizializzarli per tutte le istanze
 * Esempio: Ora che sappiamo che gli Array hanno un loro costruttore, ci viene semplice capire da dove
 * arrivino i metodi: map, filter, forEach
 *
 * Tutti i costruttori hanno un Prototype che condivide metodi e proprietà
 */

function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.bankName = "Banzo Bank";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
};
Account.prototype.showCredit = function () {
  console.log(`${this.name} ha ${this.balance}$`);
};

const sara = new Account("sara", 1000);
const bob = new Account("bob", 300);
sara.deposit(300);
sara.deposit(200);
sara.showCredit();

//Aggiungere nome della banca

console.log(bob);
console.log(bob.bankName);
console.log(sara);

// Problema è che stiamo creando questa funziona su tutte le singole istanze.
// Una banca ha migliaia di clienti.
