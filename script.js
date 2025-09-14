const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthRange = document.getElementById("lengthRange");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?/";

// Atualiza o span ao mover o slider
lengthRange.addEventListener("input", () => {
  lengthValue.textContent = lengthRange.value;
});
const slider = document.getElementById("lengthRange");

function updateSliderBackground(slider) {
  const valPercent =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--val", valPercent + "%");
}

updateSliderBackground(slider); // inicializa
slider.addEventListener("input", () => updateSliderBackground(slider));

function generatePassword() {
  let chars = "";
  if (uppercase.checked) chars += upperChars;
  if (lowercase.checked) chars += lowerChars;
  if (numbers.checked) chars += numberChars;
  if (symbols.checked) chars += symbolChars;

  if (chars === "") return "⚠ Select at least one option";

  let password = "";
  for (let i = 0; i < lengthRange.value; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

// Gera senha com botão principal
generateBtn.addEventListener("click", () => {
  passwordOutput.value = generatePassword();
});

// Copia para área de transferência
copyBtn.addEventListener("click", () => {
  if (passwordOutput.value) {
    navigator.clipboard.writeText(passwordOutput.value);
    alert("Password copied!");
  }
});
