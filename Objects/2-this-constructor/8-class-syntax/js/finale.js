/**
 * ES6 Syntax.
 *
 */

class Account {
  constructor(nome, balance) {
    this.nome = nome;
    this.balance = balance;
  }
  bankName = "Banzo Bank";
  deposit(amount) {
    this.balance += amount;
  }

  showCredit() {
    console.log(`${this.nome} ha ${this.balance}$`);
  }
}

const bob = new Account("bob", 500);
console.log(bob.bankName);
bob.deposit(400);
bob.showCredit();
console.log(bob);
