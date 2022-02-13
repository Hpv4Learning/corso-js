// Fare un zuppa
// Bollire Acqua 10 min
// Tagliare le Carote
// Buttare Carote per 5 minuti
// Tagliare le Cipolle
// Buttare Cipolle per 5 minuti

// Metodi Forniti da BROWSER non da Javscript
// @link - https://velog.io/@azurestefan/How-Javascript-works-Event-loop-Concurrency-Asynchronous-Callback-Callback-Queue-Blocking-etc

// const boilWater = (time) => {
//   console.log("bollendo");
//   return setTimeout(function () {
//     console.log("fatto");
//   }, time);
// };

// boilWater(5000);
// console.log("taglio le carote");
// boilWater(2000);
// console.log("taglio le cipolle");
// boilWater(2000);

const makeZuppa = function () {
  console.log("bollendo acqua");
  setTimeout(function () {
    console.log("acqua bolle");
    console.log("buttiamo le carote");

    setTimeout(() => {
      console.log("carote sono pronte");
      console.log("butto le cipolle");

      setTimeout(function () {
        console.log("zuppa è pronta");
      }, 2000);
    }, 2000);
    console.log("taglio le cipolle");
  }, 5000);

  console.log("tagliamo le carote");
};

makeZuppa();
