import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: 23,
    date: "Sunday, 12:00",
    description: "Sunny",
    imgURL:
      "https://openclipart.org/image/2400px/svg_to_png/208526/sunicon.png",
    humidity: 94,
    wind: 8,
  };
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
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <h1 id="current-city">{weatherData.city}</h1>
          <div className="current-date-time" id="current-time">
            {weatherData.date}
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

          <div className="current-weather-type" id="current-weather-type"></div>
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
          href="https://github.com/emiliastx/react-weather-project"
          target="_blank"
        >
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a href="https://react-weather-emilia.netlify.app/" target="_blank">
          hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}
