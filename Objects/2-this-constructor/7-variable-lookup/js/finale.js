function Account(name, balance) {
  this.name = name;
  this.balance = balance;
  // this.bankName = "Sandro Bank";
}

// Account.prototype.bankName = "Banzo Bank";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
};
Account.prototype.showCredit = function () {
  console.log(`${this.name} ha ${this.balance}$`);
};

const sara = new Account("sara", 1000);
console.log(sara);
console.log({});
console.log([]);

Array.prototype.gianni = function () {
  console.log("gianni");
};

const prova = [];
prova.gianni();

console.log(prova);
