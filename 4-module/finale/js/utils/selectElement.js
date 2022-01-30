// const getElement = (el) => {
//   const element = document.querySelector(el);
//   if (element) {
//     return element;
//   } else {
//     throw Error(`${el} non esiste nel DOM`);
//   }
// };

export default (el) => {
  const element = document.querySelector(el);
  if (element) {
    return element;
  } else {
    throw Error(`${el} non esiste nel DOM`);
  }
};
