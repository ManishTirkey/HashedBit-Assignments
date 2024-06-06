import React from "react";

function LableInput({ label, type, name, value, onChange, error }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
      {error && <span>{error}</span>}
    </div>
  );
}

export default LableInput;
