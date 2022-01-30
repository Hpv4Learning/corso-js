//Code Splitting
//Named Export
//Deafult Export
//React project type
import { data, btn } from "./utils/data.js";
import showPeople from "./utils/showPeople.js";

btn.addEventListener("click", () => showPeople(data));
