const passwordBox = document.getElementById("Password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=/?><:{}:";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
  password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password = password + number[Math.floor(Math.random() * number.length)];
  password = password + symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > password.length) {
    password = password + allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
function copyPassword() {
  passwordBox.select();
  //   document.execCommand(passwordBox.value);
  const temp = document.execCommand("copy");
//   console.log(temp);
//   console.log(document.execCommand("copy"));
}
