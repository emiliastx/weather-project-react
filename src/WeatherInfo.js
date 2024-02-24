import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <main>
        <div className="weather-app-data">
          <h1 id="current-city">{props.data.city}</h1>
          <div className="current-date-time" id="current-time">
            <FormattedDate date={props.data.date} />
          </div>
          <img className="sunIcon" />
          <div className="current-temp">
            <img className="current-icon" id="icon" src={props.data.imgURL} />
            <span id="current-temp"> {props.data.temperature}</span>
            <span className="celsius">°C</span>
          </div>

          <div className="current-weather-type" id="current-weather-type">
            {props.data.description}
          </div>
          <span className="current-humidity">
            Humidity: {props.data.humidity}
            <strong>
              <span id="current-humidity"></span>%
            </strong>
          </span>
          <div className="current-wind">
            Wind speed: {props.data.wind}{" "}
            <strong>
              <span id="current-wind"></span>km/h
            </strong>
          </div>
        </div>
      </main>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
