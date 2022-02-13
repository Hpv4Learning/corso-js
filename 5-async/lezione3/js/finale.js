// Fare un zuppa
// Bollire Acqua 10 min
// Tagliare le Carote
// Buttare Carote per 5 minuti
// Tagliare le Cipolle
// Buttare Cipolle per 5 minuti

// Metodi Forniti da BROWSER non da Javscript
// @link - https://velog.io/@azurestefan/How-Javascript-works-Event-loop-Concurrency-Asynchronous-Callback-Callback-Queue-Blocking-etc

function boiling(time) {
  for (let i = 0; i < time; i++) {
    console.log("Sorry, i'm busy");
  }
}

/**
 * setTimeOut - Accetta una 2 parametri:
 * 1 Callback function
 * 2 Numero (millisecondi) dopo il quale proverà ad eseguire la funzione
 */
const boilWater = (time) => {
  console.log("bollendo");
  return setTimeout(function () {
    console.log("fatto");
  }, time);
};

// boilWater(2000);
// console.log("taglio carote");

//Il tempo rappresenta un valore minimo non assoluto

// setTimeout ritorna un valore numerico che possimo usare per stoppare il timer
// console.log(boilWater(1000));

function stoppableTimeOut() {
  let timer = boilWater(5000);

  for (let i = 0; i < 10000; i++) {
    if (i === 2000) {
      clearTimeout(timer);
      console.log(`Timer con id ${timer} stoppato a ${i}`);
      break;
    }
  }
}

stoppableTimeOut();
