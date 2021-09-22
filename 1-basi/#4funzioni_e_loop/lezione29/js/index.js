//Ciclo While (Fino a quando)
//Ciclo iteretivo
let contatore = 0;
let valore = 0;

//Se non si aumenta contatore abbiamo un loop infinito
// while (contatore < 10) {
//   valore++;
// }

while (contatore < 10) {
  valore++;
  contatore++;
}

let contatore2 = 10;
let valore2 = 0;

do {
  valore2++;
  contatore2++;
} while (contatore2 < 10);

console.log(valore);
console.log(valore2);
