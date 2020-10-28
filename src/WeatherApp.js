import React from "react";
import FormSearchCurrent from "./FormSearchCurrent";
import Overview from "./Overview";
import Details from "./Details";
import ForecastWeather from "./ForecastWeather";

import "./FormSearchCurrent.css";
import "./Overview.css";
import "./Details.css";
import "./ForecastWeather";

export default function WeatherApp() {
  return (
    <div id="weather-app">
      <FormSearchCurrent />
      <Overview />
      <Details />
      <ForecastWeather />
    </div>
  );
}