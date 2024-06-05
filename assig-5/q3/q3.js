// your js code goes here

const para = document.getElementById("useless-paragraph");

function toggleVisibility() {
  if (para.id == "useless-paragraph") {
    para.style.visibility = "hidden";
    para.removeAttribute("id");
  } else {
    para.style.visibility = "visible";
    para.setAttribute("id", "useless-paragraph");
  }
}
