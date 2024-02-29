import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="weather-forecast-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">
          {maxTemperature()}
        </span>
        <div className="weather-forecast-temperature-min">
          {minTemperature()}
        </div>
      </div>
    </div>
  );
}
