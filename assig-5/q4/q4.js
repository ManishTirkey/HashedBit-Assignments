// javascript code goes here
document.getElementById("colorchange").onclick = function (event) {
  var colorValue = document.getElementById("colorbox").value;
  document.getElementById("text-container").style.color = colorValue;
};

// Function to change font size according to range input value
document.getElementById("fontsize").oninput = function () {
  var fontSizeValue = this.value;
  document.getElementById("text-container").style.fontSize =
    fontSizeValue + "px";
};

// Function to toggle underline style
document.getElementById("underline").onclick = function () {
  var currentStyle =
    document.getElementById("text-container").style.textDecoration;
  if (currentStyle.includes("underline")) {
    document.getElementById("text-container").style.textDecoration = "none";
  } else {
    document.getElementById("text-container").style.textDecoration =
      "underline";
  }
};

// Function to toggle italic style
document.getElementById("italic").onclick = function () {
  var currentStyle = document.getElementById("text-container").style.fontStyle;
  if (currentStyle === "italic") {
    document.getElementById("text-container").style.fontStyle = "normal";
  } else {
    document.getElementById("text-container").style.fontStyle = "italic";
  }
};

// Function to toggle bold style
document.getElementById("bold").onclick = function () {
  var currentWeight =
    document.getElementById("text-container").style.fontWeight;
  if (currentWeight === "bold") {
    document.getElementById("text-container").style.fontWeight = "normal";
  } else {
    document.getElementById("text-container").style.fontWeight = "bold";
  }
};

// Function to change font family
document.getElementById("list").onchange = function () {
  var selectedFont = this.value;
  document.getElementById("text-container").style.fontFamily = selectedFont;
};

// Function to get CSS properties
document.getElementById("getstyle").onclick = function () {
  var textContainer = document.getElementById("text-container");
  var cssProps =
    "color: " +
    textContainer.style.color +
    "; " +
    "font-size: " +
    textContainer.style.fontSize +
    "; " +
    "text-decoration: " +
    textContainer.style.textDecoration +
    "; " +
    "font-style: " +
    textContainer.style.fontStyle +
    "; " +
    "font-weight: " +
    textContainer.style.fontWeight +
    "; " +
    "font-family: " +
    textContainer.style.fontFamily +
    ";";
  document.getElementById("css-props").textContent = cssProps;
};
