// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

const root = document.querySelector("#root");

//Creare un div
const div = document.createElement("div");

//Creare il testo
const divText = document.createTextNode("Testo del div");

//Inserire il testo nel div
div.appendChild(divText);

//Inserirlo all'interno di root
root.appendChild(div);

// Creare un Heading
const heading = document.createElement("h4");
heading.classList.add("blue");

heading.appendChild(document.createTextNode("Sono un H4"));

div.appendChild(heading);
