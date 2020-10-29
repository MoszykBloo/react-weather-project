import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./ForecastView.css";

export default function ForecastView(props){
    function hours(){
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();

        return `${hours}:00`;
    }

    function temperatureMin(){
        let temperature = Math.round(props.data.main.temp_min);
        return `${temperature} ºC`;
    }

    function temperatureMax(){
        let temperature = Math.round(props.data.main.temp_max);
        return `${temperature} ºC`;
    }

    return (
        <div className="col-4" id="dairy">
            <h5 className="day">{hours()}</h5>
            <div className="weather-icon">
                <WeatherIcon code={props.data.weather[0].icon} />
            </div>
            <div className="forecast-temperature">
                <h6 className="day-temp">
                    {" "}
                    {temperatureMin()} | <span className="forecast-degrees">{temperatureMax()}</span>
                </h6>
            </div>
        </div>
    );
}