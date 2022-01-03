// NodeList di element figli rispetto a quello selezionato

//childNodes - Ritorna tutti gli elementi, anche gli spazi che sono contati come text node

//children - Ritorna tutti gli elementi senza spazi

//firstChild - primo elemento (spazi inclusi)
//lastChild - ultimo elemento (spazi inclusi)

const list = document.querySelector("#list");

console.log(list.childNodes);

console.log(list.children);

console.log(list.firstChild);
console.log(list.lastChild);

// Soluzione
console.log(list.firstElementChild);
console.log(list.lastElementChild);
