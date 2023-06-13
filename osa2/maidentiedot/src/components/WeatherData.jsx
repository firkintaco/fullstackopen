import React from "react";

const WeatherData = ({ weaherData, capital }) => {
  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>
        Temperature is {weaherData?.main?.temp} Celsius, feels like
        {weaherData?.main?.feels_like}.
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${weaherData?.weather[0]?.icon}@2x.png`}
      />
      <p>wind {weaherData?.wind?.speed} m/s</p>
    </div>
  );
};

export default WeatherData;
