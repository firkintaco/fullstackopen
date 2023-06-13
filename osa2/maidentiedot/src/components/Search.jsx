import React from "react";

const Search = ({ filter, setFilter }) => {
  return (
    <form>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button type="submit">Etsi</button>
    </form>
  );
};

export default Search;
