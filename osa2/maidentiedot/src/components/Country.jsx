import { useEffect, useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

const Country = ({ country }) => {
  console.log(country.capital);
  const [weaherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apikey = process.env.API_KEY;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apikey}&units=metric`
      )
      .then((data) => {
        console.log(weaherData);
        setWeatherData(data.data);
      });
  }, []);
  return (
    <div>
      <h2>{country.name.common}</h2>
      <table>
        <thead>
          <tr>
            <td>Area</td>
            <td>Capital</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{country.area}</td>
            <td>{country.capital}</td>
          </tr>
        </tbody>
      </table>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img src={country?.flags.png} alt={country.name.common} />

      {weaherData ? (
        <WeatherData weaherData={weaherData} capital={country.capital} />
      ) : null}
    </div>
  );
};

export default Country;
