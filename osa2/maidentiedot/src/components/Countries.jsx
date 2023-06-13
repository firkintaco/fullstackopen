import React from "react";

const Countries = ({ countries, setFilter }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }
  return (
    <div>
      {countries.map((country) => {
        return (
          <div key={country.name.common}>
            {country.name.common}{" "}
            <button onClick={() => setFilter(country.name.common)}>
              Show data
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
