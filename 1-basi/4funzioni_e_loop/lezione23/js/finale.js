//Far Vedere Esempio di Hoisting
funzione("comportamento inaspettato");

//Costrutto di funzione Visto fino ad ora
function funzione(parametro) {
  //...Fai cose
  console.log(`sono una funzione e questo è un ${parametro}`);
  return;
}
funzione("super corso");

espressione();
// Espressioni
const espressione = function () {
  console.log("sono un espressione");
};

espressione();

// Arrow (Discorso a parte)
const arrow = () => {
  console.log("Ciao");
};

//Implicit Return
const implicitReturn = () => "ciao";

const prova = implicitReturn();
