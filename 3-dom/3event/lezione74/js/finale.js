// Mouse Events
// mousedown - Bottone viene premuto
// mouseup - Bottone viene rilasciato
// mouseenter - Mouse entra all' interno dell'elemento
// mouseleave - Mouse esce dall'elemento

const btn = document.getElementById("btn");
const heading = document.querySelector("h1");

let printEvent = (text) => {
  console.log(text || "click");
};

btn.addEventListener("click", () => printEvent());
btn.addEventListener("mousedown", () => printEvent("down"));
btn.addEventListener("mouseup", () => printEvent("up"));

heading.addEventListener("mouseenter", function () {
  heading.classList.add("orange");
});
heading.addEventListener("mouseleave", function () {
  heading.classList.remove("orange");
});
