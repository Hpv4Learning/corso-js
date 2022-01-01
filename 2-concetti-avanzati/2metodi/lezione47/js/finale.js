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

const youngerThan30 = people.find(function (item) {
  if (item.age < 30) {
    return item;
  }
});

const youngerThan30Index = people.findIndex(function (element) {
  if (element.age < 30) {
    return element;
  }
});

console.log(youngerThan30, youngerThan30Index);

// const indexOfYounger = people.indexOf({
//   name: "Sandro",
//   age: 20,
//   position: "Frontend Developer",
// });

const customFindMethod = function () {
  const ageArray = people.map((item) => item.age);
  const ageIndex = ageArray.indexOf(488);
  if (ageIndex > -1) {
    console.log("Esiste un elemento e quindi faccio cose");
    return;
  }
  console.log("non esiste e faccio altro");
};

customFindMethod();
