// Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
  return paragraph.split(/\s+/).length;
}

let paragraph = "This is a sample paragraph with a number of words.";
console.log(countWords(paragraph)); // Output: 9
