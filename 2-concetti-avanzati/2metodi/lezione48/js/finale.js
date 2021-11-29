//Reduce
//Metodo per "ridurre" l'array ad un unico valore
//Ritorna un unico valore

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

const prezzi = [18, 28, 45, 78, 54, 43, 12];

const totale = prezzi.reduce(function (total, item, index, array) {
  //Il valore che ritorniamo sarò il valore dal quale inizierà il ciclo successivo
  return total + item;
});

const totaleConValoreDiDefault = prezzi.reduce(function (
  total,
  item,
  index,
  array
) {
  //Il valore che ritorniamo sarà il valore dal quale inizierà il ciclo successivo
  return total + item;
},
10000000000);

const peopleAge = people.reduce(function (total, person) {
  // return total + person.age;
  console.log(total);
  // return total.age + person.age;
  return total + person.age;
}, 0);

console.log({
  totale: totale,
  totale_default: totaleConValoreDiDefault,
  peopleAge,
});
