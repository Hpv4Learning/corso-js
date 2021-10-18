let valore = 0;

for (let i = 0; i < 10; i += 2) {
  valore++;
}

console.log(valore);

let valori = [1, 2, 3, 4];

let nuoviValori = [];

for (let j = 0; j < valori.length; j++) {
  const el = valori[j];
  if (el % 2 !== 0) {
    continue;
  }
  nuoviValori.push(el * el);
}

console.log(nuoviValori);
