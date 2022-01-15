const btn = document.getElementById("btn");
const heading = document.querySelector("h1");

btn.addEventListener("click", function () {
  if (heading.style.color === "red") {
    heading.style.color = "white";
  } else {
    heading.style.color = "red";
  }
});
