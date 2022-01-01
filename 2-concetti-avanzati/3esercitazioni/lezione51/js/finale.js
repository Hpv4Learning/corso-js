//Generare password casuali della lunghezza specificata dall'utente
const letters =
  "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";

let array = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters.charAt(index);
  array.push(element);
}

const generatePassword = function (lunghezza) {
  if (lunghezza < 8) {
    alert("password non sicura");
    return;
  }
  let randomString = "";
  for (let i = 0; i < lunghezza; i++) {
    let randomChar = Math.floor(Math.random() * array.length);
    randomString += array[randomChar];
  }

  return randomString;
};

const randomPassword = generatePassword(7);
console.log(randomPassword);
