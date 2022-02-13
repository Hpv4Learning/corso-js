// Fare un zuppa
// Bollire Acqua 10 min
// Tagliare le Carote
// Buttare Carote per 5 minuti
// Tagliare le Cipolle
// Buttare Cipolle per 5 minuti

// Metodi Forniti da BROWSER non da Javscript
// @link - https://velog.io/@azurestefan/How-Javascript-works-Event-loop-Concurrency-Asynchronous-Callback-Callback-Queue-Blocking-etc

const boilWater = (time) => {
  console.log("bollendo");
  return setTimeout(function () {
    console.log("fatto");
  }, time);
};
