import React from "react";
import Overview from "./Overview";
import ForecastWeather from "./ForecastWeather";

import "./Overview.css";
import "./ForecastWeather";

export default function WeatherApp() {
  return (
    <div id="weather-app">
      <Overview defaultCity="santa catarina"/>
      <ForecastWeather />
    </div>
  );
}