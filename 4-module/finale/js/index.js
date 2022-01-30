//Code Splitting
//Named Export
//Deafult Export
//React project type

const data = [
  {
    name: "Mario Cemento",
    jobs: "Developer",
  },
  {
    name: "Elena Malizia",
    jobs: "Head of Designer",
  },
  {
    name: "Matteo Garbin",
    jobs: "Marketing Manager",
  },
];

const element = {
  btn: document.querySelector(".button-md"),
  container: document.querySelector("#jobs"),
};

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
