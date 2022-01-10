//Permette di utilizzare qualsiasi selettore CSS

// querySelector("css selector") - Primo elemento corrispondente
// querySelectorAll("css selector") - Tutte le corrispondenze in una NodeList = array like object

// const eth = document.querySelector("#eth");
// eth.style.backgroundColor = "blue";

// const item = document.querySelector(".item");
// console.log(item);

const lastItem = document.querySelector("li:last-child");
lastItem.style.backgroundColor = "tomato";

const list = document.querySelectorAll(".item");

list.forEach(function (item) {
  item.style.color = "orange";
});

console.log(list.item(1));
list.item(1).style.backgroundColor = "red";

// Può usare solo forEach
// list.filter((el) => {
//   return el.classList.contains("last");
// });

let newList = Array.from(list);

const filterList = newList.filter((el) => {
  return el.classList.contains("last");
});

console.log(filterList);
