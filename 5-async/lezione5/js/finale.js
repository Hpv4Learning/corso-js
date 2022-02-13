// Fare un zuppa
// Bollire Acqua 10 min
// Tagliare le Carote
// Buttare Carote per 5 minuti
// Tagliare le Cipolle
// Buttare Cipolle per 5 minuti

//Promises - Pending, Resolved, Rejected
// then & cacth methods

const promise = new Promise((resolve, reject) => {
  let value = "test";
  // let value;
  if (value) {
    resolve(value);
  } else {
    reject("C'è stato un problema");
  }
});

const boilWater = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("acqua bollita");
      resolve();
    }, 1000);
  });
};

const makeCarote = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("carote pronte");
      resolve();
    }, 1000);
  });
};

const stopPromise = () => {
  return new Promise((_, reject) => {
    reject("Mancata la corrente");
  });
};

const makeCipolle = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("zuppa pronta");
      resolve();
    }, 1000);
  });
};

const promiseZuppa = function () {
  boilWater()
    .then(makeCarote)
    // .then(stopPromise)
    .then(makeCipolle)
    .catch((err) => console.log(err))
    .finally(() => console.log("promise terminata"));
};

// const makeZuppa = function () {
//   console.log("bollendo acqua");
//   setTimeout(function () {
//     console.log("finito bollire acqua");
//     console.log("taglio carote");

//     setTimeout(() => {
//       console.log("finito di bollire carote");
//       console.log("taglio le cipolle");

//       setTimeout(function () {
//         console.log("zuppa pronta");
//       }, 2000);
//     }, 2000);
//   }, 5000);
// };

promiseZuppa();

// // console.log(promise);
// promise
//   .then(function (result) {
//     console.log(result);
//     return "cioa";
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.log(err));
