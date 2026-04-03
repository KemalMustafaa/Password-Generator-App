const passwordBox = document.getElementById("password");
const copy = document.getElementById("copy-image");
const generate = document.getElementById("generate-btn");
const length = 12;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "0987654321";
const symbol = "!@#$%^&*())_+<>?/[]{}";

const allChars = upperCase + lowerCase + number + symbol;

generate.addEventListener("click", function () {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
});

copy.addEventListener("click", async function () {
  try {
    //mengambil teks langsung dari value input
    await navigator.clipboard.writeText(passwordBox.value);

    //opsional: beri tahu user kalau berhasil melakukan copy (misal pakai alert biasa)
    alert("Password copied to clipboard!");
  } catch (err) {
    console.error("Gagal menyalin: ", err);
  }
});
