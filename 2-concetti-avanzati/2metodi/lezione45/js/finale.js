//Map
//Ritorna un nuovo Array
//Non modifica il numero di elementi nell'array originale

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

// const newArray = people.map(function (person) {
//   // return "Map Method";
//   // return person.position;

//   //Returnare è necessario ma non obbligatorio
// });

// const yearFromRetire = people.map(function (person, index) {
//   let years = 65 - person.age;
//   return {
//     name: person.name,
//     retiresIn: years,
//   };
// });

// console.log(yearFromRetire);

const advancedExample = people.map((person, index) => {
  return `<h2 style="margin-top: 8px;"> ${index + 1} ${person.name}</h2>`;
});

console.log(advancedExample);

const div = document.createElement("div");

div.innerHTML = advancedExample.join("");
div.style.marginTop = "30px";

document
  .querySelectorAll(".container")[1]
  .insertAdjacentElement("beforeend", div);
