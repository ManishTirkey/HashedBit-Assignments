// Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

let sentence = "I love my Indoa";
let correctedSentence = correctfn(sentence, "Indoa", "India");
console.log(correctedSentence); // Output: "I love my India"
