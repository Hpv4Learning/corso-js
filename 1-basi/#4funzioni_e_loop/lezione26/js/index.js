// Uguaglianza
// == vs ===
const esempio1 = 20 == "20";
const esempio2 = 20 === "20";

console.log(esempio1, esempio2);

// != vs !==
const esempio3 = 20 != "20";
const esempio4 = 20 !== "20";

console.log(esempio3, esempio4);

//Esempio pratico
const pratico = null == undefined;
const pratico2 = null === undefined;

console.log(pratico, pratico2);

/**
 * CONSIGLIO AVANZATO
 * Controllare che un valore non sia == null equivale a controllare che esso non sia anche undefined
 */
