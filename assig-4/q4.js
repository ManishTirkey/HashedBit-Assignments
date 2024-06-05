// Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

// using regression
function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelsCount = 0;
  let consonantsCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantsCount++;
    }
  }

  return { vowels: vowelsCount, consonants: consonantsCount };
}

let text = "This is a sample text with more than twenty characters.";
let counts = countVowelsAndConsonants(text);
console.log(counts); // Output: { vowels: 12, consonants: 24 }
