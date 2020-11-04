import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'

import WeatherInfo from "./WeatherInfo";
import TheForecast from "./TheForecast";
import lupa from './lupa.png';
import pin2 from './pin2.png';


import "./SearchEngine.css";
import "./TheForecast.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready:false});
  const [city, setCity] = useState(props.defaultCity);
  
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
      icon: response.data.weather[0].icon
    });
  }

  function search(){
    const apiKey = "3e43755f9b9e49aaa25fe2da226ada2b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChamge(event){
    setCity(event.target.value);
  }

  function getCoords(position){
        let latitude = 0;
        let longitude = 0;
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        let apiKey = "3e43755f9b9e49aaa25fe2da226ada2b";
        let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

        axios.get(`${apiUrl}lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`).then(showWeather);

        apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  }

  function currentPosition(event){
        navigator.geolocation.getCurrentPosition(getCoords); 
  }

  if( weatherData.ready ){
    return (
      <div className="principal">
        <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                id="city-input"
                onChange={handleCityChamge}
              />
            </div>
            <div className="col-2">
              <button
                type="submit"
                value="Search"
                className="btn btn-outline-primary w-100"
                id="search-button"
              >
                <img src={lupa} id="lupa" alt="lupa"/>
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-outline-info w-100" id="current" onClick={currentPosition}>
                <img src={pin2} id="pin-icon" alt="pin"/>
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData}/>
        <TheForecast city={weatherData.city}/>
        
      </div>
    );
  } else {
    search();
    return (
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={5000}
      />
    );
  }

  
}