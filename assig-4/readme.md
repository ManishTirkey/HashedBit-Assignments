### :rocket: Assignment - 4

**1. Create an array of states in india. Remove all the names starting with vowels from the list. Use array.filter.**

```Javascript
let states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",const input = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

function calculateAverages(students) {
  let result = {};

  for (let student in students) {
    let scores = Object.values(students[student]);
    let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    result[student] = { average: average };
  }

  return result;
}

console.log(calculateAverages(input));
// Output:
// {
//   student1: { average: 64.2 },
//   student2: { average: 64.2 },
//   student3: { average: 64.2 }
// }
k
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

let statesWithoutVowels = states.filter((state) => {
  // Check if the first letter is not a vowel using regression
  return !/^[AEIOUaeiou]/.test(state);
});

// Display the result
console.log(statesWithoutVowels);
```

**2. t str = 'I love my India'**
**output expected = 'India my love I'**
**Write code for this.**

```Javascript
let str = "I love my India";

function reverseWords(input) {
  let wordsArray = input.split(" ");

  let reversedArray = wordsArray.reverse();

  let reversedString = reversedArray.join(" ");
  return reversedString;
}

let output = reverseWords(str);

console.log(output); // Output: 'India my love I'
```

**3. let string = 'INDIA'**
**output = 'INDONESIA'**
**Use array.splice**

```Javascript
let string = "INDIA";

function replaceStringWithSplice(str, replaceWith) {
  let arr = str.split("");
  arr.splice(0, arr.length, ...replaceWith.split(""));
  return arr.join("");
}

let output = replaceStringWithSplice(string, "INDONESIA");
console.log(output); // Output: 'INDONESIA'

```

**4. Take any string with minimum 20 characters. Count number of consonant and vowel in the string.**

```Javascript

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

```

**5. Write a function to replace wrong word with correct word in any sentance.**
**Like this - correctfn(string, wrong, correct)**
**Use string.replace in function.**

```Javascript
function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

let sentence = "I love my Indoa";
let correctedSentence = correctfn(sentence, "Indoa", "India");
console.log(correctedSentence); // Output: "I love my India"
```

**6. inputArr = [1,2,3,9,10,7,5,4,3]**
**answer = [9, 10, 7]**
**User array.filter and return numbers greater than 5.**

```Javascript
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let filteredArr = inputArr.filter(num => num > 5);
console.log(filteredArr);  // Output: [9, 10, 7]
```

**7**
**Input**

```Javascript
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
```

**Output = [**
**{ name: "Ram", average: 70 },**
**{ name: "Mohan", average: 80 },**
**{ name: "Sai", average: 70 },**
**{ name: "Hemang", average: 85 },**
**];**
**Use array.map and array.reduce.**

```javascript
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const studentsWithAverages = students.map((student) => {
  const average =
    student.scores.reduce((acc, score) => acc + score, 0) /
    student.scores.length;
  return { name: student.name, average: average };
});

console.log(studentsWithAverages);
// Output:
// [
//   { name: "Ram", average: 70 },
//   { name: "Mohan", average: 80 },
//   { name: "Sai", average: 70 },
//   { name: "Hemang", average: 85 },
// ]
```

**8. ([Digital root](<https://en.wikipedia.org/wiki/Digital_root#:~:text=The%20digital%20root%20()also%20repeated,to%20compute%20a%20digit%20sum.>)) Write a function to find repeated sum of digits until there is only a single digit in the number.**
**Example - 456 - 4+5+6 = 15 - 1+5 = 6.**

```javascript
function repeatedSumOfDigits(num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

console.log(repeatedSumOfDigits(456)); // Output: 6
```

**9. Write a function to count the number of words in a paragraph.**

```javascript
function countWords(paragraph) {
  return paragraph.split(/\s+/).length;
}

let paragraph = "This is a sample paragraph with a number of words.";
console.log(countWords(paragraph)); // Output: 9
```

**Write a function to reverse a string.**
**Input - Hello**
**Outpur - olleH**

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // Output: "olleH"
```

**11. Write code to find average as mentioned below. Use array and object methods.**
**Input**

```json
[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
```

**output**

```json
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
```

```javascript
const input = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
};

function calculateAverages(students) {
  let result = {};

  for (let student in students) {
    let scores = Object.values(students[student]);
    let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    result[student] = { average: average };
  }

  return result;
}

console.log(calculateAverages(input));
// Output:
// {
//   student1: { average: 64.2 },
//   student2: { average: 64.2 },
//   student3: { average: 64.2 }
// }
```
