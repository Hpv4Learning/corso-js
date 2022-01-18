//replaceChild('Nuovo', 'Vecchio')

const root = document.querySelector("#root");

const heading = document.createElement("h4");
heading.classList.add("blue");

heading.appendChild(document.createTextNode("Sono un H4"));

root.appendChild(heading);

const title = document.createElement("h6");

title.appendChild(document.createTextNode("Sono un h6"));

root.replaceChild(title, heading);
