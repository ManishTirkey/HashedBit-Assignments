import React from "react";
import Calculator from "./components/Calculator";
import styled from "styled-components";

const CalculatorApp = styled.div``;

const App = () => {
  return (
    <CalculatorApp className="App">
      <Calculator />
    </CalculatorApp>
  );
};

export default App;
