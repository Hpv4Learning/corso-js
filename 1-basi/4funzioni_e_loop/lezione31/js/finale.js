const persona = {
  nome: "Omar",
  age: 26,
  amici: ["Enzo Goduria", "Leonardo Di Marco", "Teo X"],
  sposato: false,
  lavoro: {
    posizione: "Frontend Developer",
    azienda: "Young Platform",
    colleghi: [
      {
        nome: "Mattia",
        posizione: "App Developer",
      },
      {
        nome: "Andrea",
        posizione: "Backend",
      },
    ],
  },
  isRetired(age) {
    return 60 - age <= 20;
  },
};

console.log(persona.isRetired(41));
