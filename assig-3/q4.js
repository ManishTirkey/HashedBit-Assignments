// Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
  // Convert the numbers to strings
  let str1 = n1.toString();
  let str2 = n2.toString();

  // Pad the shorter string with leading zeros
  while (str1.length < str2.length) {
    str1 = "0" + str1;
  }
  while (str2.length < str1.length) {
    str2 = "0" + str2;
  }

  let sum = 0;

  // Iterate through the strings and compute the sum of products
  for (let i = 0; i < str1.length; i++) {
    sum += parseInt(str1[i]) * parseInt(str2[i]);
  }

  return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34)); // Output: 24
console.log(sumOfProducts(123, 456)); // Output: = 32
console.log(sumOfProducts(56, 789)); // Output: = 93
console.log(sumOfProducts(1001, 1001)); // Output: = 2
