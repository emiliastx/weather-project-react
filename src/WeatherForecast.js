import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function day() {
    let date = new Date(forecast[0].dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (loaded) {
    return (
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col forecast-col">
            <div className="weather-forecast-date">{day()}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={60} />
            <div className="weather-forecast-temperature">
              <span className="weather-forecast-temperature-max">
                {Math.round(forecast[0].temp.max)}°
              </span>
              <div className="weather-forecast-temperature-min">
                {Math.round(forecast[0].temp.min)}°
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
