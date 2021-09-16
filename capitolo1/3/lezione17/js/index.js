// Set - cos'è e cosa può contenere

const prova = [1, 2, 3, 4, 5, 5, 5, 5];
const esempio = new Set(prova);

console.log(prova);
console.log(esempio); // dimostrazione differenze con array

const prova2 = [
  "a",
  "b",
  3,
  3,
  [1, 2, 3],
  { nome: "Enzo", cognome: "Goduria" },
  esempio,
];
const esempio2 = new Set(prova2);

console.log(prova2);
console.log(esempio2); // dimostrazione tipi di dati che può contenere
