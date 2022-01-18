/**
 * Come per il css dobbiamo:
 * selezionare uno o più elementi
 * svolgere delle azioni su quell'elemento
 */

document.body.style.backgroundColor = "green";
document.body.style.color = "yellow";
document.getElementById("btn");

// Assegnare ad un variabile
const container = document.getElementById("root");

// altri medodi di selezione

document.querySelector("#root");

// il window object
console.log(window);

//Selezionare un elemento ritorna un Node object o una NodeList che viene definito un arraylike object

const btn = document.getElementById("btn");
console.log(btn);
const btnStyle = btn.style;
console.log(btnStyle);
