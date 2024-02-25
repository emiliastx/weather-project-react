import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span id="current-temp" className="current-temp-numeral">
          {" "}
          {props.celsius}
        </span>
        <span className="unit">
          °C |{" "}
          <a href="/" className="change-unit" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span id="current-temp" className="current-temp-numeral">
          {" "}
          {Math.round(fahrenheit)}
        </span>
        <span className="unit">
          °F |{" "}
          <a href="/" className="change-unit" onClick={showCelsius}>
            C
          </a>
        </span>
      </span>
    );
  }
}
