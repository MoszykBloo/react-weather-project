import React from "react";
import SearchEngine from "./SearchEngine";
import ForecastWeather from "./ForecastWeather";

import "./SearchEngine.css";
import "./ForecastWeather.css";

export default function WeatherApp() {
  return (
    <div id="weather-app">
      <SearchEngine defaultCity="los angeles"/>
      <ForecastWeather />
    </div>
  );
}
