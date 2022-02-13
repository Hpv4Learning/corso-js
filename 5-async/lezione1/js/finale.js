// Javascript è un linguaggio Single Threaded e Syncrono

// console.log("Apri il pacco");
// console.log("Bolli Acqua");
// console.log("Scola al pasta");

function boiling() {
  for (let i = 0; i < 10000; i++) {
    console.log("bollendo");
  }
  console.log("fatto");
}

console.log("Apri il pacco");
boiling();
console.log("fare soffritto");
console.log("fare sugo");
console.log("Scola al pasta");
