/**
 * Metodo call. Ci permette di ridefinire il constesto di 'this' e di invocare una funzione/metodo su un altro oggetto.
 *
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

// Se volessi chimare questo metodo su lucia senza ridefinirlo ?
// Questi sono oggetti, ma può essere un qualsiasi metodo. Stiamo semplificando.

/**
 * 1 Ridefinire il metodo: DRY - Do not repeat your self
 * 2 Creare una Reference function: funziona ma dovremmo farlo con tutti gli oggetti
 * 3 Usare call method
 */

// const saluto = daniel.saluto;
// lucia.saluto = saluto;
// lucia.saluto();

//Call

function saluto() {
  console.log(`Holaaaa, sono ${this.nome} e ho ${this.age} anni.`);
}

//Punta a Window
saluto();

saluto.call(lucia);
saluto.call(daniel);
saluto.call({ nome: "Sandro", age: 45 });

//Si ricontestualizzare il this anche di un metodo
daniel.saluto.call(lucia);
