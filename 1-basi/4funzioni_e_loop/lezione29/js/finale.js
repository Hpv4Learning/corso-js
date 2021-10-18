let contatore = 0;
let valore = 0;

while (contatore < 10) {
  valore++;
  contatore++;
  if (valore === 7) {
    break;
  } else if (valore < 5) {
    continue;
  }
  console.log(`Valore è  uguale a ${valore}`);
}

console.log(valore);
console.log(contatore);

let contatore2 = 0;
let valore2 = 0;

do {
  valore2++;
  contatore2++;
} while (contatore2 < 0);

console.log(valore2);
console.log(contatore2);
