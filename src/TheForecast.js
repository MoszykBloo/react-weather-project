import React, { useState } from "react";
import axios from "axios";

import ForecastView from "./ForecastView";


export default function TheForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
    }

    if(loaded && props.city === forecast.city.name){
        return (
            <div className="row" id="forecast-weather">
                <ForecastView data={forecast.list[0]} />
                <ForecastView data={forecast.list[1]} />
                <ForecastView data={forecast.list[2]} />
                <ForecastView data={forecast.list[3]} />
                <ForecastView data={forecast.list[4]} />
                <ForecastView data={forecast.list[5]} />
            </div>
        )
    } else {
        let apiKey = "3e43755f9b9e49aaa25fe2da226ada2b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleForecastResponse);
        
        return (null); 
    }

    
}