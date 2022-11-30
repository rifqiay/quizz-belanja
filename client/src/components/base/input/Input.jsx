import React from "react";

const Input = ({ type, className, placeholder, name, onChange, value }) => {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required
      />
    </>
  );
};

export default Input;
