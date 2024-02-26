import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-date">Tue</div>
          <WeatherIcon code="01d" size={60} />
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-temperature-max">9°</span>
            <div className="weather-forecast-temperature-min">4°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
