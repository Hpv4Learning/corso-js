// Fare un zuppa
// Bollire Acqua 10 min
// Tagliare le Carote
// Buttare Carote per 5 minuti
// Tagliare le Cipolle
// Buttare Cipolle per 5 minuti

//Promises - Pending, Resolved, Rejected
// then & cacth methods

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
