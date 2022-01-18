const heading = document.querySelector(".heading");
const btn = document.querySelector("#btn");
const root = document.querySelector("#root");

// heading.addEventListener("click", function (e) {
//   e.currentTarget.remove();
// });

const createElement = function () {
  const title = document.createElement("h5");
  title.classList.add("heading");
  title.innerText = "sono un nuovo testo";
  root.appendChild(title);
};

btn.addEventListener("click", createElement);

root.addEventListener("click", function (event) {
  if (event.target.classList.contains("heading")) {
    root.removeChild(event.target);
  }
});

console.log(heading);
