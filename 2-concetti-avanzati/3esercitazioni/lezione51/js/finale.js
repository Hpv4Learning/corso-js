//Generare password casuali della lunghezza specificata dall'utente
const letters =
  "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";

const array = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters.charAt(index);
  array.push(element);
}

const generatePassword = function (lungezza) {
  if (lungezza < 8) {
    alert("Password troppo poco sicura");
    return;
  }
  let randomString = "";
  for (let i = 0; i <= lungezza; i++) {
    let randomChar = Math.floor(Math.random() * array.length);
    randomString += array[randomChar];
  }

  return randomString;
};

const randomPassword = generatePassword(24);

console.log(randomPassword);
