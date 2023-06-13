import { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";
import Countries from "./components/Countries";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  const displayCountries =
    filter &&
    countries.filter((country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    );
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => setCountries(res.data));
    console.log(countries);
  }, []);
  return (
    <div className="App">
      <Search filter={filter} setFilter={setFilter} />

      {displayCountries.length === 1 ? (
        <Country country={displayCountries[0]} />
      ) : (
        <Countries
          countries={displayCountries ? displayCountries : []}
          setFilter={setFilter}
        />
      )}
    </div>
  );
}

export default App;
