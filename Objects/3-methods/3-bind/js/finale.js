/**
 * Metodo call. Ci permette di ridefinire il constesto di 'this' e di invocare una funzione/metodo su un altro oggetto.
 * Apply. Molto simile a call, ma cambia la gestione degli argomenti.
 * Bind. Simile a call ma con lo scopo di creare un reference function da utilizzare successivamente
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

function saluto(job, city) {
  console.log(
    `Holaaaa, sono ${this.nome} e ho ${this.age} anni. Lavoro come ${job} a ${city}`
  );
}

saluto.call(lucia, "Project Manager", "Milano");
saluto.apply(daniel, ["Performance Markeing", "Parigi"]);
const luciaSaluto = saluto.bind(lucia, "Project Manager", "Milano");
luciaSaluto();
