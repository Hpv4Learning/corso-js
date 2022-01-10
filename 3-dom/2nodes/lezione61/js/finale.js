//nodeValue
//textContent

const text = document.getElementById("text");
console.log(text);
const value = text.firstChild.nodeValue;
const content = text.textContent;
text.textContent = "Sono un nuovo testo";

console.log(value, content);
