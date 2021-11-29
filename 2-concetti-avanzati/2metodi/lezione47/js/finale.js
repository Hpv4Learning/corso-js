//find, findIndex, indexOf
//Metodi di ricerca all'interno dell'array che ritonarno sempre un valore
//Ritorna un unico valore, il primo che corrisponde alla ricerca
//Find ritorna un elemento dell'array mentre findIndex e indexOf ritornano il suo indice oppure -1

const people = [
  {
    name: "Sandro",
    age: 20,
    position: "Frontend Developer",
  },
  {
    name: "Enzo",
    age: 35,
    position: "Backend Developer",
  },
  {
    name: "Sabrina",
    age: 28,
    position: "App Developer",
  },
  {
    name: "Saverio",
    age: 45,
    position: "Recruiter",
  },
];

//Ritorna solo il primo
const youngerThan30 = people.find(function (item) {
  if (item.age < 30) return item;
});

//Ritorna l'indice 0 -1
const youngerThan30Index = people.findIndex(function (item) {
  if (item.age < 20) return item;
});

//Non accetta una funzione e non permette ricerche su array di oggetti
const indexOfYounger = people.indexOf({
  name: "Sandro",
  age: 20,
  position: "Frontend Developer",
});

const ageArray = people.map((item) => item.age);
// console.log(ageArray.indexOf(20));
const agePosition = ageArray.indexOf(24);

console.log("finalItem", people[agePosition]);

//Attenzione al return di -1
function customFindMethod() {
  const ageArray = people.map((item) => item.age);
  // console.log(ageArray.indexOf(20));
  const agePosition = ageArray.indexOf(20);
  if (agePosition > -1) {
    console.log("NE ABBIAMO UNO NE ABBIAMO UNO");
  }
  console.log("NESSUN ELEMENTO TROVA FACCIAMO ALTRE COSE");
}

customFindMethod();
console.log(youngerThan30, youngerThan30Index, indexOfYounger);
