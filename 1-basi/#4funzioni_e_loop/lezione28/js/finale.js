//Switch Statements
// Esempio del dato

const fruit = "Pere";

switch (fruit) {
  case "Arancia":
    console.log("Le Arance costano 0.50€ al Kg");
    break;
  case "Mela":
    console.log("Le Mele costano 0.29€ al Kg");
    break;
  case "Pere":
    console.log("Le Pere costano 0.70€ al Kg");
  // break;
  case "Cocco":
  case "Banana":
    console.log("Esaurito");
    break;
  default:
    console.log("Il negozio non venede questi prodotti");
    break;
}

//Operazioni Concatenate
const esempio = 0;
let risposta = "";
switch (esempio) {
  case 0:
    risposta += "Quindi ";
  case 1:
    risposta += "Qual ";
    risposta += "è ";
  case 2:
    risposta += "il tuo ";
  case 3:
    risposta += "Nome";
  case 4:
    risposta += "?";
    console.log(risposta);
    break;
  case 5:
    risposta += "!";
    console.log(risposta);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
