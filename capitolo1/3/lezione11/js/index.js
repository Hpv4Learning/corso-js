// Concatenazione di stringhe
// Template literal string ` ` + ${ }
// Utilizzo carattere di escape \' , \"" , \\ , \n

const nome = "Enzo";
const cognome = "Goduria";
const nome2 = "Gildo";
// let nomeCompleto;
// nomeCompleto = nome + " " + cognome + ".";

// console.log("Ciao, il tuo nome completo è: " + nome + " " + cognome + ".");
// console.log("Ciao, il tuo nome completo è: " + nomeCompleto);

console.log(`Ciao ${nome} ${cognome},\n benvenuto! `);
console.log('"' + nome2 + " sale sull'albero!\" ");
