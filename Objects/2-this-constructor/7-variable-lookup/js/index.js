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
