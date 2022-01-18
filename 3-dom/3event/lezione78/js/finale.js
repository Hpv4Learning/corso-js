// event propagation - Direzione di emessione degli eventi
// event bubbling - propagazione a catena
// event capturing - Da window verso target
// target - Elemento dal quale viene scaturito l'evento

const list = document.querySelector("#list");
const root = document.querySelector("#root");

function showBubbling(e) {
  console.log("currentTarget", e.currentTarget);
  //   console.log("target", e.target);
  //   console.log("evento");
  if (e.target.classList.contains("item")) {
    console.log("sono un item");
  }
}

function stopProp(e) {
  console.log("stopped");
  e.stopPropagation();
}

window.addEventListener("click", showBubbling);
root.addEventListener("click", showBubbling);
document.addEventListener("click", showBubbling);
list.addEventListener("click", stopProp);
