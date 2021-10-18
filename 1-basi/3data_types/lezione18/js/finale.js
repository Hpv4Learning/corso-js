const persona = {
  nome: "Enzo",
  cognome: "Goduria",
  age: 33,
  "si sposa": false,
  isRetired(age) {
    return age > 60;
  },
};

console.log(persona);

const figli = [
  {
    nome: "Maurizio",
    age: 4,
  },
  {
    nome: "Anna",
    age: 7,
  },
];

persona.figli = figli;

console.log(persona.isRetired(persona.age));

delete persona.figli;

console.log(persona);
