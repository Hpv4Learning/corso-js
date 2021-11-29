//Filter
//Ritorna un nuovo Array
//Può alterare il numero di elementi
//Ritorna in base la verificarsi di una condizione

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

//Ritorna in base ad una condizione
// const developers = people.filter(function (person) {
//   return true;
// });

const developers = people.filter(function (person) {
  return person.position.toLowerCase().endsWith("developer");
});

console.log(developers);
