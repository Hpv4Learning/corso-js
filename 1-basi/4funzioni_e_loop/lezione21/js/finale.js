let numero = 1;

function aggiungiValore(num1, num2 = 0) {
  let somma = num1 + num2 - numero;
  console.log(somma);
}

aggiungiValore(7);
