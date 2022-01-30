import get from "./selectElement.js";

const data = [
  {
    name: "Mario Cemento",
    jobs: "Developer",
  },
  {
    name: "Elena Malizia",
    jobs: "Head of Designer",
  },
  {
    name: "Matteo Garbin",
    jobs: "Marketing Manager",
  },
];

export const element = {
  btn: get(".button-md"),
  container: get("#jobs"),
  //   prova: get("ciao"),
};

const { btn, container } = element;

export { data, btn, container };
