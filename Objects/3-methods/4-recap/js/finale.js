const btn = document.getElementById("btn");

const contatore = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

// btn.addEventListener("click", contatore.increment);

// limiti: non puoi rimuovere l'event listenter
// btn.addEventListener("click", contatore.increment.bind(contatore));

// Soluzione migliore
const increment = contatore.increment.bind(contatore);
btn.addEventListener("click", increment);
btn.removeEventListener("click", increment);
