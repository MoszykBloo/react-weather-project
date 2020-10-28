import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Overview.css";

export default function Overview(props) {
  const [weatherData, setWeatherData] = useState({ ready:false});

  function showWeather(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sensation: response.data.main.feels_like,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  if( weatherData.ready ){
    return (
      <div className="principal">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                id="city-input"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-primary w-100"
                id="search-button"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-outline-info w-100" id="current">Current
              </button>
            </div>
          </div>
        </form>
        <div className="overview">
          <small id="date">
            Last updated: <br /> <FormattedDate date={weatherData.date}/>
          </small>
          <h1 id="city">{weatherData.city}</h1>
          <p id="description">{weatherData.description}</p>
        </div>
        <div className="clearfix weather-temperature">
          <img
            src={weatherData.icon}
            alt=""
            id="icon"
          />
        </div>
        <div className="row" id="numbers">
          <div className="col-6" id="big-temp">
            <strong id="temperature">{Math.round(weatherData.temperature)}</strong>
          </div>
          <div className="col-6" id="c-f">
            <span id="degrees">
              <a href="/" id="celsius-link" className="active">
                ºC
              </a>{" "}
              |
              <a href="/" id="fahrenheit-link">
                {" "}
                ºF
              </a>
            </span>
          </div>
        </div>
        <div className="row" id="details">
          <div className="col-4 details">
            <p>
              Feels like: <span id="sensation"></span>{Math.round(weatherData.sensation)}%
            </p>
          </div>
          <div className="col-4 details">
            <p>
              Humidity <span id="humidity"></span>{Math.round(weatherData.humidity)}%
            </p>
          </div>
          <div className="col-4 details">
            <p>
              Wind: <span id="wind"></span> {Math.round(weatherData.wind)}km/h
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3e43755f9b9e49aaa25fe2da226ada2b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }

  
}
