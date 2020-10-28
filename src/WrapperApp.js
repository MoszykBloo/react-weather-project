import React from "react";
import WeatherApp from "./WeatherApp";

import "./WrapperApp.css";

export default function WrapperApp() {
  return (
    <div className="wrapper-app">
      <WeatherApp />
    </div>
  );
}