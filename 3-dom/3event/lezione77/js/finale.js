// currentTarget vs target
// currentTarget - Elemento sul quale viene posizionato l'eventListener
// target - Elemento dal quale viene scaturito l'evento

const buttons = document.querySelectorAll("button");

buttons.forEach(function (element) {
  element.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    console.log("target", e.target);
    // e.target.classList.add("orange");
    e.currentTarget.classList.add("orange");
  });
});
