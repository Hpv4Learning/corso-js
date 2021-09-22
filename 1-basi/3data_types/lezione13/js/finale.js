// Ancora numeri
// +=, -=, *=, /=, ++, --, %
// Modulo %, operatore che ritorna il resto di una divisione

// dimostrazione += e -=
let numero = 20;
numero += 10;
numero -= 3;
console.log(numero);

// dimostrazione *= e /=
let numero2 = 10;
numero2 *= 10;
numero2 /= 5;
console.log(numero2);

// dimostrazione ++
numero2++;
numero2++;
numero2++;
numero2++;
console.log(numero2);

// dimostrazione regole di somma algebrica
const espressione1 = 16 + 7 + 12 * 10;
const espressione2 = (16 + 7 + 12) * 10;

console.log(espressione1);
console.log(espressione2);

// dimostrazione modulo %
const num = 5;
const risultato = num % 2;

if (risultato > 0) {
  console.log("Il numero è dispari!");
} else {
  console.log("Il numero è pari!");
}
