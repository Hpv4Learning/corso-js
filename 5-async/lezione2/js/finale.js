// Fare un zuppa
// Bollire Acqua 10 min
// Tagliare le Carote
// Buttare Carote per 5 minuti
// Tagliare le Cipolle
// Buttare Cipolle per 5 minuti

function boiling(time) {
  for (let i = 0; i < time; i++) {
    console.log("bollendo");
  }
}

boiling(10000);
console.log("taglio carote");
boiling(5000);
console.log("taglio cipolle");
boiling(5000);
