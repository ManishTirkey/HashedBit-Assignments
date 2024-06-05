### :rocket: Assignment - 3

**1. Write code to display from 1 to 100 but just even numbers.**

```javascript
function EvenNumber(start, end) {
  for (let i = start; i <= end; i += 2) {
    // if (i % 2 === 0)
    console.log(i);
  }
}

EvenNumber(1, 100);
```

**2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.**

```javascript
function calculate(num1, num2, operation) {
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error: Division by zero";
      }
      break;
    default:
      result = "Error: Invalid operation";
  }

  return result;
}

console.log(calculate(10, 5, "add")); // Output: 15
console.log(calculate(10, 5, "subtract")); // Output: 5
console.log(calculate(10, 5, "multiply")); // Output: 50
console.log(calculate(10, 5, "divide")); // Output: 2
console.log(calculate(10, 0, "divide")); // Output: Error: Division by zero
console.log(calculate(10, 5, "unknown")); // Output: Error: Invalid operation
```

**3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.**

> if 500000 >= salary > 0 then 0% tax on the entire salary.
> If 1000000 >= salary > 500000 then 10% tax on the entire salary.
> If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
> If the salary > 1500000 then 30% tax on the entire salary.\*\*

```javascript
function findTax(salary) {
  let taxAmount;

  switch (true) {
    case salary > 0 && salary <= 500000:
      taxAmount = salary * 0;
      break;
    case salary > 500000 && salary <= 1000000:
      taxAmount = salary * 0.1;
      break;
    case salary > 1000000 && salary <= 1500000:
      taxAmount = salary * 0.2;
      break;
    case salary > 1500000:
      taxAmount = salary * 0.3;
      break;
    default:
      taxAmount = "Error: Invalid salary";
  }

  return taxAmount;
}

console.log(findTax(400000)); // Output: 0
console.log(findTax(750000)); // Output: 75000
console.log(findTax(1250000)); // Output: 250000
console.log(findTax(2000000)); // Output: 600000
console.log(findTax(-500)); // Output: Error: Invalid salary
```

**4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24**

```javascript
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
```
