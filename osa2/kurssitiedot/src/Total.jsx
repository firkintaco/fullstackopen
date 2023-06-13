import React from "react";

const Total = ({ parts }) => {
  const total = parts.map((part) => part.exercises);
  const totalItems = total.reduce((value1, value2) => {
    return value1 + value2;
  });

  return (
    <>
      <p style={{ fontWeight: "bold" }}>total of {totalItems} exercises</p>
    </>
  );
};

export default Total;
