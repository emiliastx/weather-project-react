import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city//
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="weather-app">
        <header>
          <form
            onSubmit={handleSubmit}
            className="search-form"
            id="search-form"
          >
            <input
              type="text"
              placeholder="Search city..."
              required
              className="search-form-input"
              id="search-form-input"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>
        </header>
        <WeatherInfo data={weatherData} />

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
    search();
    //add a loading spinner here from npm//
    return "Loading...";
  }
}
