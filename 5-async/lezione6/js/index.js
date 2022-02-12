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
      resolve();
    }, 5000);
  });
};

const makeCarote = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
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
    console.log("zuppa pronta");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finito tutto");
  }
};

// const promiseZuppa = function () {
//   boilWater()
//     .then(makeCarote)
//     // .then(stopPromise)
//     .then(makeCipolle)
//     .then(() => console.log("zuppa"))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("promise finita"));
// };

makeZuppa();
