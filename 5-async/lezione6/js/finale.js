// Fare un zuppa
// Bollire Acqua 10 min
// Tagliare le Carote
// Buttare Carote per 5 minuti
// Tagliare le Cipolle
// Buttare Cipolle per 5 minuti

// async await
// try catch

const boilWater = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("acqua bollita");
      resolve();
    }, 5000);
  });
};

const makeCarote = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("carote");
      resolve("prova");
    }, 2000);
  });
};

const stopPromise = () => {
  return new Promise((_, reject) => {
    reject("Errore");
  });
};

const makeCipolle = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("cipolle pronte");
      resolve();
    }, 2000);
  });
};

const makeZuppa = async function () {
  try {
    await boilWater();
    await makeCarote();
    await stopPromise();
    await makeCipolle();
    // console.log(risultato);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finito tutto");
  }
};

makeZuppa();
