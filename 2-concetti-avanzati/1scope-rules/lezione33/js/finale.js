let stringa = "Ciao Belli";
let array = ["C", "i", "a", "o", "B", "e", "l", "l", "i"];
console.log(stringa[3]);
console.log(array[3]);

stringa[3] = "d";
console.log(stringa);

array[3] = "d";
console.log(array);

let object1 = { fruit: "mela", color: "verde" };
let object2 = object1;
let object3 = { fruit: "mela", color: "verde" };
console.log("controllo che object1 === object2", object1 === object2); //true
console.log("controllo che object1 === object3", object1 === object3);
