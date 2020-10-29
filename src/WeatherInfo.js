import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css"

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <div className="overview">
                <small id="date">
                    Last updated: <br /> 
                    <FormattedDate date={props.data.date}/>
                </small>
                <h1 id="city">{props.data.city}</h1>
                <p id="description">{props.data.description}</p>
            </div>
            <div className="clearfix weather-temperature">
                <WeatherIcon code={props.data.icon} />
            </div>
            <div className="row" id="numbers">
                <div className="col-6" id="big-temp">
                    <strong id="temperature">{Math.round(props.data.temperature)}</strong>
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
                    Feels like: <span id="sensation"></span>{Math.round(props.data.sensation)}%
                    </p>
                </div>
                <div className="col-4 details">
                    <p>
                    Humidity <span id="humidity"></span>{Math.round(props.data.humidity)}%
                    </p>
                </div>
                <div className="col-4 details">
                    <p>
                    Wind: <span id="wind"></span> {Math.round(props.data.wind)}km/h
                    </p>
                </div>
            </div>
        </div>
    );
}