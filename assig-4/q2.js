// let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str = "I love my India";

function reverseWords(input) {
  let wordsArray = input.split(" ");

  let reversedArray = wordsArray.reverse();

  let reversedString = reversedArray.join(" ");
  return reversedString;
}

let output = reverseWords(str);

console.log(output); // Output: 'India my love I'
