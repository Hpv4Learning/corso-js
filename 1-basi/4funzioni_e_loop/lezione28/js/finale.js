const fruit = "Banana";

switch (fruit) {
  case "Arancia":
    console.log("Le Arance costano 0.50€ al Kg");
    break;
  case "Pera":
    console.log("Le Pere costano 0.29€ al Kg");
    break;
  case "Cocco":
  case "Banana":
    console.log("Esauriti, spiacente");
    break;
  default:
    console.log("Il negozio non è fornito di questo protto");
    break;
}

const valore = 0;
let risposta = "";
switch (valore) {
  case 0:
    risposta += "Quindi ";
  case 1:
    risposta += "Qual è ";
  case 2:
    risposta += "il tuo ";
  case 3:
    risposta += "Nome ";
  case 4:
    risposta += "?";
  case 5:
    risposta += "!";
    console.log(risposta);
    break;
  default:
    console.log("Scegli un valore tra 0 e 5!");
    break;
}
