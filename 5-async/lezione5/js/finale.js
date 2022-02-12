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

makeZuppa();

// const promise = new Promise((resolve, reject) => {});

const promise = new Promise((resolve, reject) => {
  let value = "test";
  // let value;
  if (value) {
    resolve(value);
  } else {
    reject("C'è stato un problema");
  }
});

// console.log(promise.value);
// console.log(promise);

// promise
//   .then(function (result) {
//     console.log(result);
//   })
//   .then(() => console.log("eccomi"))
//   .catch((err) => {
//     console.log(err);
//   });

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

const promiseZuppa = function () {
  boilWater()
    .then(makeCarote)
    // .then(stopPromise)
    .then(makeCipolle)
    .then(() => console.log("zuppa"))
    .catch((err) => console.log(err))
    .finally(() => console.log("promise finita"));
};

promiseZuppa();
