//remove
//removeChild

const root = document.querySelector(`#root`);
const headings = document.querySelector(`#heading`);

// headings.remove();
// root.removeChild(headings)

const titolo = headings.querySelector("h1");
console.log(titolo);
headings.removeChild(titolo);
