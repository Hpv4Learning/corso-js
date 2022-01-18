// Key Events
// keypress - Al premere di un tasto
// keydown - Tasto rimane premuto
// keyup - Il tasto "torna su"

const input = document.getElementById("text");

let printEvent = (text) => {
  console.log(text || "press");
};

input.addEventListener("keypress", function () {
  printEvent();
});
input.addEventListener("keydown", function () {
  printEvent("down");
});
input.addEventListener("keyup", function () {
  printEvent("up");
});
