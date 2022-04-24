/**
 * Metodo call. Ci permette di ridefinire il constesto di 'this' e di invocare una funzione/metodo su un altro oggetto.
 * Apply. Molto simile a call, ma cambia la gestione degli argomenti.
 */

const daniel = {
  nome: "daniel",
  age: 21,
  saluto() {
    console.log(`Holaaaa, sono ${this.nome} e ho ${this.age} anni.`);
  },
};

const lucia = {
  nome: "lucia",
  age: 26,
};

function saluto() {
  console.log(`Holaaaa, sono ${this.nome} e ho ${this.age} anni.`);
}

saluto.call(lucia);
saluto.call(daniel);
saluto.call({ nome: "Sandro", age: 45 });
daniel.saluto.call(lucia);
