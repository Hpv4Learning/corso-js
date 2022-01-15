// Web Storage API
// session & local sorage
// setItem, getItem, removeItem, clear

localStorage.setItem("nome", "enzo");
localStorage.setItem("nome", "igor");
localStorage.setItem("cognome", "petruzzi");

let fruit = localStorage.getItem("fruit");
fruit = fruit ? JSON.parse(fruit) : [];

fruit.push("anguria");

localStorage.setItem("fruit", JSON.stringify(fruit));

localStorage.removeItem("cognome");
// localStorage.clear();
