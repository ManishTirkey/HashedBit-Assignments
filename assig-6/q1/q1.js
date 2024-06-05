function displayRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 41) - 20;

  const num = document.getElementById("num");
  const result = document.createElement("div");

  num.textContent = randomNumber;

  let resultText = randomNumber >= 0 ? "Hot" : "Cold";
  result.textContent = resultText;

  num.appendChild(result);
}

document.getElementById("btn").addEventListener("click", displayRandomNumber);
