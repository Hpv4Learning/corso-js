// Conversione implicita

// const nome = "Enzo";
// const cognome = "Goduria";
// const nomeCompleto = nome + " " + cognome;
// console.log(nomeCompleto);

// const numero = 15;
// const numero2 = 7;
// const risultato = numero + numero2;
// console.log(risultato);

// // operazioni con stringhe
// const prova = nome - cognome;
// console.log(prova); //Nan

// const numero3 = "47";
// const numero4 = "8";
// const risultato2 = numero3 - numero4; // usando + concateniamo
// console.log(risultato2);

// Esempio ricezione dati da un form

const numero = 22;
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let input = document.getElementById("input").value;
  // input = parseInt(input);
  console.log(input);
  console.log(numero + input);
});
