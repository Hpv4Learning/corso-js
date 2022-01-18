// getAttribute()
// setAttribute()

const first = document.querySelector(".button-md");
const classValue = first.getAttribute("class");
console.log(classValue);

const second = first.nextElementSibling;
second.setAttribute("class", classValue);
// second.setAttribute("data-prova", "sugo");
// console.log(second.getAttribute("data-prova"));

const buttons = document.querySelectorAll(".button-md");
console.log(buttons);
