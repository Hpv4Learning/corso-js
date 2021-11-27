// DIFFERENZA TRA UN VALUE & IL RIFERIMENTO

// PRIMITIVE DATA TYPES LAVORANO DIRETTAMENTE SUL VALORE E NON HANNO CONSEGUENZE SULLE ASSEGNAZIONI PRECEDENTI

// OBJECT DATA TYPES INVECE PASSANO IL RIFERIMENTO E HANNO EFFETTI SULLE PRECEDENTI RICORRENZE

let number = 5;
let number2 = number;

number2 += 5;

console.log(`Il valore del numero è ${number}`);
console.log(`Il valore del numero2 è ${number2}`);

let object = { name: "Gianni" };
// let object2 = object;

//Soluzione
let object2 = { ...object };

object2.name = "Fabrizio";

console.log(`Il valore dell'oggetto è ${object.name}`);
console.log(`Il valore dell'oggetto2 è ${object2.name}`);

const object3 = { nome: "Daniele" };

object3.nome = "Sandro";

console.log(object3);
