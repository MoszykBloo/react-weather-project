import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready:false});

  function showWeather(response) {
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
        <WeatherInfo data={weatherData}/>
        
      </div>
    );
  } else {
    const apiKey = "3e43755f9b9e49aaa25fe2da226ada2b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }

  
}