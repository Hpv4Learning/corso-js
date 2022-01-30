// import { element } from "./data.js";
import { container } from "./data.js";

// const { container } = element;

function showPeople(data) {
  let jobsList = data.map(function (element) {
    return `<p> ${element.name} position:
        <strong> ${element.jobs} </strong>
        </p>`;
  });

  container.classList.add("paper");

  container.innerHTML = jobsList.join("");
}

export default showPeople;
