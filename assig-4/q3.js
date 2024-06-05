// let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = "INDIA";

function replaceStringWithSplice(str, replaceWith) {
  let arr = str.split("");
  arr.splice(0, arr.length, ...replaceWith.split(""));
  return arr.join("");
}

let output = replaceStringWithSplice(string, "INDONESIA");
console.log(output); // Output: 'INDONESIA'
