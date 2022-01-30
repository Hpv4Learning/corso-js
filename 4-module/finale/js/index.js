//Code Splitting
//Named Export
//Deafult Export
//React project type
import { data, element } from "./utils/data.js";

function showPeople() {
  let jobsList = data.map(function (element) {
    return `<p> ${element.name} position:
        <strong> ${element.jobs} </strong>
        </p>`;
  });

  element.container.classList.add("paper");

  element.container.innerHTML = jobsList.join("");
}

element.btn.addEventListener("click", showPeople);
