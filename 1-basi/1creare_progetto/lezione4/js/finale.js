function stampa() {
  alert("cambiare messaggio");
}
const btn = document.querySelectorAll(".button-lg");
btn.forEach(function (item) {
  item.addEventListener("click", stampa);
});
