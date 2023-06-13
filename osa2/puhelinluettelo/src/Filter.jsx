import React from "react";

const Filter = ({ setFilter, filter }) => {
  return (
    <div>
      filter shown with{" "}
      <input onChange={(e) => setFilter(e.target.value)} value={filter} />
    </div>
  );
};

export default Filter;
