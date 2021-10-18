// Operatori Logici ( && ) e ( || )

// if (age >= 18 && nome === "Gianni") {
//   console.log("Birra");
// } else {
//   console.log("Succo");
// }

const isMaggiorenne = function (age) {
  console.log("Controllo età");
  return age >= 18;
};

const isProprietario = (nome) => {
  console.log("Controllo Nome");
  return nome === "Enzo";
};

const nome = "Gianni";
const age = 19;

if (isMaggiorenne(age) || isProprietario(nome)) {
  console.log("Birra");
} else {
  console.log("Succo");
}
