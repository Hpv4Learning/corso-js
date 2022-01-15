//prepend
//innerText

const root = document.querySelector(`#root`);
const heading = document.createElement("h2");
heading.className = "blue";
heading.innerText = "Sono il titolo";

root.prepend(heading);
