import React from "react";
import styled from "styled-components";

// Define a styled button component
const Button = styled.button`
  padding: 10px;
  margin: 5px;
  font-size: 18px;
  border: 1px solid #fff;
  border-radius: 4px;
  cursor: pointer;
`;

const Operation = ({ operation, onClick }) => {
  return <Button onClick={onClick}>{operation}</Button>;
};

export default Operation;
