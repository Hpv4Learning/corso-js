//sibling - E' ilrapport tra figli di un determinato contenitore

//nextSibling - Successivo (incluso di spazi)
//nextElementSibling - Successivo (spazi esclusi)
//previousSibling - Successivo (incluso di spazi)
//previousElementSibling - Successivo (spazi esclusi)

const first = document.querySelector(".first");

console.log(first.nextSibling);
console.log(first.nextElementSibling);

first.nextElementSibling.style.backgroundColor = "steelblue";

const last = document.querySelector(".last");

console.log(last.previousSibling);
console.log(last.previousElementSibling);

last.previousElementSibling.style.backgroundColor = "steelblue";
