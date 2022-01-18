// Reference Functions

const btn = document.getElementById("btn");
const heading = document.querySelector("h1");
let number = 0;

function handleClick() {
  if (number < 5) {
    addHeading();
  } else {
    const headings = document.querySelectorAll("h3");
    headings.forEach((el) => document.body.removeChild(el));
    number = 0;
  }
}

const addHeading = function () {
  const title = document.createElement("h3");
  number++;
  title.innerText = `sono il div numero ${number}`;
  document.body.appendChild(title);
};

btn.addEventListener("click", handleClick);

// btn.addEventListener("click", function () {
//   heading.classList.toggle("orange");
//   if (number < 5) {
//     addHeading();
//   }
// });
