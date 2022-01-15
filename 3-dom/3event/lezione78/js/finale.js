// event propagation - Direzione di emessione degli eventi
// event bubbling - propagazione a catena
// event capturing - Da window verso target
// target - Elemento dal quale viene scaturito l'evento

const list = document.querySelector("#list");
const root = document.querySelector("#root");

function showBubbling(e) {
  console.log("CurrentTarget", e.currentTarget);
  // console.log("Target", e.target);
  if (e.target.classList.contains("item")) {
    // console.log("sono un item");
  }
}

function stopPropagation(e) {
  console.log("stopped");
  e.stopPropagation();
}

list.addEventListener("click", showBubbling, { capture: true });
root.addEventListener("click", showBubbling, { capture: true });
document.addEventListener("click", showBubbling, { capture: true });
window.addEventListener("click", showBubbling, { capture: true });
