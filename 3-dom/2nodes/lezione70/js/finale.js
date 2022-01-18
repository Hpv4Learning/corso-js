// innerHTML

const root = document.querySelector(`#root`);
const heading = document.querySelector(`#heading`);
const list = document.querySelector(".list");

console.log(list.innerHTML);
console.log(list.textContent);

// const lista = document.createElement("ul");
const title = heading.textContent;
list.insertAdjacentHTML(
  "afterbegin",
  `
    <ul class="blue list">
          <li>${title}</li>
          <li>Secondo</li>
    </ul>
`
);

// root.insertAdjacentElement("beforeend", list);
