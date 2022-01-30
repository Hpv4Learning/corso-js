//Code Splitting
//Named Export
//Deafult Export
//React project type
import { data, element } from "./utils/data.js";
import showPeople from "./utils/showPeople.js";

element.btn.addEventListener("click", () => showPeople(data));
