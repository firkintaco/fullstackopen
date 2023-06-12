import React from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td style={{ padding: "0.25rem" }}>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticLine;
