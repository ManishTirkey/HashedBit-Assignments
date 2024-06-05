// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

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
