// parentElement - Permette di acceder al contenitore a partire dal contenuto

const contenuto = document.querySelector("#contenuto");

console.log(contenuto.parentElement.parentElement.parentElement.parentElement);

contenuto.parentElement.parentElement.parentElement.parentElement.style.color =
  "blue";
