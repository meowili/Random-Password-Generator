const passwordBox = document.getElementById("password");
const length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopgrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+~|}{[]></-=";
const generateBtn = document.getElementById("generator");
const allCharacters = upperCase + lowerCase + numbers + specialCharacters;
const copyBtn = document.getElementById("copy");

generateBtn.addEventListener("click", () => {
  let password = "";
  while (length > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  passwordBox.value = password;
});

copyBtn.addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
});
