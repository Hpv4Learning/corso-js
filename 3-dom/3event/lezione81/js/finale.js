// Web Storage API
// session & local sorage
// setItem, getItem, removeItem, clear

// localStorage.setItem("nome", "enzo");
// localStorage.setItem("nome", "chiara");
// localStorage.setItem("cognome", "piazza");
// localStorage.clear();

// localStorage.removeItem("cognome");

// let fruit = ["banana", "pesca"];
// localStorage.setItem("fruit", JSON.stringify(fruit));

// let value = localStorage.getItem("fruit");
// console.log(JSON.parse(value));

// let wishList = [
//   {
//     item: "felpa",
//     qty: 3,
//   },
//   {
//     item: "pantalone",
//     qty: 3,
//   },
//   {
//     item: "zaino",
//     qty: 3,
//   },
// ];

let wishList = localStorage.getItem("wish")
  ? JSON.parse(localStorage.getItem("wish"))
  : [];

wishList = wishList.filter((el) => el.item !== "zaino");

console.log(wishList);

localStorage.setItem("wish", JSON.stringify(wishList));
