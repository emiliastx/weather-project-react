import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgURL:
        "https://openclipart.org/image/2400px/svg_to_png/208526/sunicon.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="weather-app">
        <header>
          <form className="search-form" id="search-form">
            <input
              type="text"
              placeholder="Search city..."
              required
              className="search-form-input"
              id="search-form-input"
              autoFocus="on"
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>
        </header>
        <main>
          <div className="weather-app-data">
            <h1 id="current-city">{weatherData.city}</h1>
            <div className="current-date-time" id="current-time">
              <FormattedDate date={weatherData.date} />
            </div>
            <img className="sunIcon" />
            <div className="current-temp">
              <img
                className="current-icon"
                id="icon"
                src={weatherData.imgURL}
                alt="sunny"
              />
              <span id="current-temp"> {weatherData.temperature}</span>
              <span className="celsius">°C</span>
            </div>

            <div className="current-weather-type" id="current-weather-type">
              {weatherData.description}
            </div>
            <span className="current-humidity">
              Humidity: {weatherData.humidity}
              <strong>
                <span id="current-humidity"></span>%
              </strong>
            </span>
            <div className="current-wind">
              Wind speed: {weatherData.wind}{" "}
              <strong>
                <span id="current-wind"></span>km/h
              </strong>
            </div>
          </div>
        </main>
        <div className="weather-forecast" id="forecast"></div>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/emiliastx" target="_blank">
            Emilia de St Croix
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/emiliastx/weather-project-react"
            target="_blank"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a href="https://emilia-weather-react.netlify.app/" target="_blank">
            hosted on Netlify.
          </a>
        </footer>
      </div>
    );
  } else {
    const apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
