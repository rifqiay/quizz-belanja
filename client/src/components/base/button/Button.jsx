import React from "react";

const Button = ({ type, className, onClick, title }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
