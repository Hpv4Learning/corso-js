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

// boilWater(1000);
// console.log("taglio carote");
// boilWater(500);
// console.log("taglio cipolle");
// boilWater(500);

const makeZuppa = function () {
  console.log("bollendo acqua");
  setTimeout(function () {
    console.log("finito bollire acqua");
    console.log("taglio carote");

    setTimeout(() => {
      console.log("finito di bollire carote");
      console.log("taglio le cipolle");

      setTimeout(function () {
        console.log("zuppa pronta");
      }, 2000);
    }, 2000);
  }, 5000);
};

makeZuppa();
