// insertAdjacentElement('posizione', Elemento)

const root = document.querySelector(`#root`);
const heading = document.createElement("h2");
heading.className = "blue";
heading.innerText = "Sono il titolo";

root.insertAdjacentElement("beforebegin", heading);
// root.insertAdjacentElement("afterbegin", heading);
// root.insertAdjacentElement("beforeend", heading);
// root.insertAdjacentElement("afterend", heading);
