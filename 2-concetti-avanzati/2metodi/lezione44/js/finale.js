//ForEach
//Non ritorna un nuovo Array

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

// function printName(person, index, array) {
//   console.log(person.name);
//   console.log(index);
//   console.log(array);
// }

// people.forEach(printName);

//Alternativa
// people.forEach(function (person, index, array) {
//   console.log(person.name);
//   console.log(index);
//   console.log(array);
// });

//Soluzione più comune: ARROW

people.forEach((person, index, array) => {
  console.log(person.name);
  console.log(index);
  console.log(array);
});
