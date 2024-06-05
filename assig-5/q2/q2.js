//Write your code here
const container = document.getElementById("container");
container.style.border = "2px solid blue";
container.style.width = "200px";
container.style.height = "200px";

function createDiv(width, height, text) {
  const div = document.createElement("div");
  div.setAttribute("id", "newDiv");
  div.style.width = `${width}px`;
  div.style.height = `${height}px`;

  div.innerText = text;

  div.style.border = "2px solid green";

  container.appendChild(div);
}

// Do not change this code
Window.createDiv = createDiv(100, 100, "hello world");
