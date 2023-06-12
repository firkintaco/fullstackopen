import React from "react";

const Button = ({ children, action }) => {
  return (
    <button
      onClick={action}
      style={{ padding: "0.25rem", marginLeft: "0.25rem" }}
    >
      {children}
    </button>
  );
};

export default Button;
