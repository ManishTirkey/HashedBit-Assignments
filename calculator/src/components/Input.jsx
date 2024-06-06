import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 1em;
`;

const CInput = styled.input`
  padding: 16px 8px;
  font-size: 16px;
  outline: none;
  border: 0;
  background: #dbdbdb;
  border-radius: 4px;
`;

function Input({ type, placeholder, value, onChange }) {
  return (
    <InputWrapper>
      <CInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}

export default Input;
