// Operatori logici (&& and) - (|| or)

const nome = "Enzo";
const age = 40;

// if (age > 18 || nome === 'Enzo') {
//   console.log("Ammesso");
// } else {
//   console.log("Non ammesso");
// }

if (age > 18 && nome === "Enzo") {
  console.log("Ammesso");
} else {
  console.log("Non ammesso");
}

const isMaggiorenne = function (age) {
  console.log("isMaggiorenne");
  return age >= 18;
};

const isProprietario = function (name) {
  console.log("isProprieetario");
  return name === "Enzo";
};

//Ordine di esecuzione
if (isMaggiorenne(age) || isProprietario("Enzo")) {
  console.log("Ammesso");
} else {
  console.log("Non ammesso");
}
