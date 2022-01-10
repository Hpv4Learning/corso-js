// Permette di selezione uno o più elementi in base alla classe

//getElementsByClassName('class')
//HTMLCollections = array-link object
//stesse proprietà di un array ma non stessi metodi

const list = document.getElementsByClassName("item");

//Array From
// const newArray = Array.from(list);

//Spread Operator
const newArray = [...list];

newArray.forEach(function (item) {
  item.style.color = "green";
});
