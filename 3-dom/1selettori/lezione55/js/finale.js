// Permette di selezione uno o più elementi in base al nome del loro tag

//getElementsByTagName('tagname')
//HTMLCollections = array-link object
//stesse proprietà di un array ma non stessi metodi

const titoli = document.getElementsByTagName("h1");
console.log(titoli);

//Proprietà
titoli[0].style.color = "orange";
console.log(titoli.length);

//Metodi
// titoli.forEach(function (titolo) {
//   console.log(titolo);
// });

//Conversione

const list = document.getElementsByTagName("li");

//Array From
// const newArray = Array.from(list);

//Spread Operator
const newArray = [...list];

newArray.forEach(function (item) {
  item.style.color = "green";
});
