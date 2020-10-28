import React from "react";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="principal">
      <div className="overview">
        <small id="date">
          Last updated: <br /> Friday 13:30
        </small>
        <h1 id="city">Mexico</h1>
        <p id="description">Sunny</p>
      </div>
      <div className="clearfix weather-temperature">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt=""
          id="icon"
        />
      </div>
      <div className="row" id="numbers">
        <div className="col-6" id="big-temp">
          <strong id="temperature">28</strong>
        </div>
        <div className="col-6" id="c-f">
          <span id="degrees">
            <a href="https://github.com/MoszykBloo/react-weather-project" id="celsius-link" className="active">
              ºC
            </a>{" "}
            |
            <a href="https://github.com/MoszykBloo/react-weather-project" id="fahrenheit-link">
              {" "}
              ºF
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
