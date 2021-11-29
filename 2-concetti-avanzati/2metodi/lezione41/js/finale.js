const frontend = ["react", "javascript", "css", "html"];

//length
console.log(frontend.length);

//concat
const backend = ["go", "java", "C#", "python"];
const developer = frontend.concat(backend);

//reverse
console.log(developer.reverse());

//unshift
developer.unshift("dart");

//shift
developer.shift();
console.log(developer.shift());

//push
developer.push("swift");

//pop
developer.pop();
console.log(developer.pop());

//slice
console.log(developer.slice(1, 4));

//splice - MUTA ARRAY PRINCIPLAE
console.log(developer.splice(1, 3));

//splice - Replace item
developer.splice(1, 0, "java", "kotlin");

console.log("DEVELOPER", developer);
