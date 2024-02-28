import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="weather-forecast-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={60} />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <div className="weather-forecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </div>
      </div>
    </div>
  );
}
