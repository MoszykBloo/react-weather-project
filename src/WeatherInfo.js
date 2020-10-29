import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import ChangeDegrees from "./ChangeDegrees";

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
            <ChangeDegrees celsius={props.data.temperature}/>
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