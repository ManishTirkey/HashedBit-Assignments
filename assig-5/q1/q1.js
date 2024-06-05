const app = document.getElementById("app");
const button = document.getElementById("swap");

function swapTheme() {
  //write your code
  app.classList.toggle("night");
  button.classList.toggle("button_night");
  button.classList.toggle("button_day");
  console.log(button.classList);
}
