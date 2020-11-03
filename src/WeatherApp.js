import React from "react";
import SearchEngine from "./SearchEngine";

import "./SearchEngine.css";

export default function WeatherApp() {
  return (
    <div id="weather-app">
      <SearchEngine defaultCity="Mexico"/>
    </div>
  );
}
