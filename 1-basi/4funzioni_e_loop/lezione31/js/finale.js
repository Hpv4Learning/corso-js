// Oggetto che contiene tutte le tipologie di dato
// Per descrivere un entità complessa
const persona = {
  nome: "Omar",
  age: 26,
  amici: ["Enzo Goduria", "Leonardo Di Marco", "Teo X"],
  sposato: false,
  lavoro: {
    posizione: "Frontend Developer",
    azienda: "Young Platfrom",
    colleghi: [
      {
        nome: "Mattia",
        posizone: "App Dev",
      },
      {
        nome: "Andrea",
        posizione: "Backend",
      },
    ],
  },
  isRetired(age) {
    return 60 - age === 40;
  },
};

console.log(persona.isRetired(persona.age));
