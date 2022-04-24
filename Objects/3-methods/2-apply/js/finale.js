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

const lavoro = ["designer", "Torino"];

function saluto(job, city) {
  console.log(
    `Holaaaa, sono ${this.nome} e ho ${this.age} anni. Lavoro come ${job} a ${city}`
  );
}

// call li accetta come lista di argomenti
saluto.call(lucia, "designer", "Torino");
saluto.call(daniel, "designer", "Roma");
saluto.call({ nome: "Sandro", age: 45 }, "developer", "Imola");

//Stesso Risultato. Però vogliamo passare degli argomenti alla funzione saluto

//Apply richiede una array. Comodo per non dover cambiare i parametri se dovessimo riutilizzarli
saluto.apply(lucia, lavoro);
saluto.apply(daniel, lavoro);
saluto.apply({ nome: "Sandro", age: 45 }, ["developer", "Imola"]);
