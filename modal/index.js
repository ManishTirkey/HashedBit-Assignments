// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the button that closes the modal
let closeBtn = document.getElementById("closeModalBtn");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.top = "50px";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.top = "-100%";
};

// When the user clicks the close button, close the modal
closeBtn.onclick = function () {
  modal.style.top = "-100%";
};
