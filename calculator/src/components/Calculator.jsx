import { React, useState } from "react";

import Input from "./Input";
import Operation from "./Operation";
import styled from "styled-components";

const CalculatorContainer = styled.div`
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: inline-flex;
  background: #cfcfcf;
  padding: 8px 2em;
  border-radius: 6px;
`;

const Result = styled.h3`
  font-size: 24px;
`;

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        res = number2 !== 0 ? number1 / number2 : "Error: Division by zero";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <CalculatorContainer className="calculator">
      <h1>Calculator</h1>

      <Input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <ButtonGroup className="buttons">
        <Operation operation="+" onClick={(e) => handleOperation("+")} />
        <Operation operation="-" onClick={(e) => handleOperation("-")} />
        <Operation operation="*" onClick={(e) => handleOperation("*")} />
        <Operation operation="/" onClick={(e) => handleOperation("/")} />
      </ButtonGroup>
      <Result className="result">Result: {result}</Result>
    </CalculatorContainer>
  );
};

export default Calculator;
