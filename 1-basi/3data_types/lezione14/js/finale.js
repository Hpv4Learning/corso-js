// let numero2 = 12;
// let numero1 = "5";

// const risultato = numero1 + numero2;
// const risultato2 = numero1 - numero2;

// console.log(risultato);
// console.log(risultato2);

const numero = 22;
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let input = document.getElementById("input").value;
  input = parseInt(input);
  console.log(input);
  document.write(numero + input);
});
