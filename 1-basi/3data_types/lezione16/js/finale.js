let array = ["valore1", "valore2", true, undefined, null, 5];

const cane1 = "Bobby";
const cane2 = "Jack";
const cane3 = "Joy";
const cane4 = "Maggie";

let cani = [cane1, cane2, cane3, cane4, "Pizza Margherita", false];

// console.log(cani[1]);

let canePreferito = cani[2];
console.log(canePreferito);

cani[2] = "Piero";
canePreferito = cani[2];
console.log(canePreferito);

cani[4] = "Mario";
console.log(cani[5]);
