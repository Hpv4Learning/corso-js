// const isGreater = 3 >= 5;

// if (isGreater) {
//   //.....
// } else {
//   //...
// }

function isGreaterThen10(param) {
  if (typeof param === "number") {
    return param > 10;
  }
  return false;
}

if (isGreaterThen10(9)) {
  console.log("Maggiore di 10");
} else if (5 < 4) {
  console.log("Else if");
} else {
  console.log("Nessuna condizione eseguita");
}
