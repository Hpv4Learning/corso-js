import { element } from "./data.js";

function showPeople(data) {
  let jobsList = data.map(function (element) {
    return `<p> ${element.name} position:
        <strong> ${element.jobs} </strong>
        </p>`;
  });

  element.container.classList.add("paper");

  element.container.innerHTML = jobsList.join("");
}

export default showPeople;
