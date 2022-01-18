//insertBefore('Elemento Da inserire', 'prima di quale Elemento')

const root = document.querySelector("#root");

const heading = document.createElement("h4");
heading.classList.add("blue");

heading.appendChild(document.createTextNode("Sono un H4"));

root.appendChild(heading);

const title = document.createElement("h3");

title.appendChild(document.createTextNode("Sono un h3"));

root.insertBefore(title, heading);

// document.querySelector(".container-xl").insertBefore(title, root);
