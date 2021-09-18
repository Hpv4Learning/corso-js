// Oggetti
// Collezione di proprietà e metodi
// Dot notation

const persona = {
  nome: "Enzo",
  cognome: "Goduria",
  eta: 33,
  sposato: true,
  figli: ["Luca", "Paolo"],
  indirizzo: {
    via: "Via Roma",
    civico: 1,
    cap: 10100,
    citta: "Napoli",
  }, // proprietà
  visualizzaNomeCompleto() {
    console.log(this.nome + " " + this.cognome);
  }, // metodo
};

const figli = persona.figli;
console.log(figli);

console.log(persona.nome);
persona.nome = "Ermenegildo";
console.log(persona.nome);

persona.proprietaAggiuntiva = false;
console.log(persona);

persona.visualizzaNomeCompleto();
