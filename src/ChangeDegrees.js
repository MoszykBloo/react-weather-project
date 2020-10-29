import React, { useState } from "react";

import "./ChangeDegrees.css";

export default function ChangeDegrees(props){
    const [units, setUnits] = useState(`celsius`);

    function showInFahrenheit(event){
        event.preventDefault();
        setUnits("fahrenheit");
    }

    function showInCelsius(event){
        event.preventDefault();
        setUnits("celsius");
    }

    function fahrenheit(){
        return (props.celsius * 9 / 5) + 32;
    }

    if (units === `celsius`){
        return (
            <div className="row" id="numbers">
                <div className="col-6" id="big-temp">
                    <strong id="temperature">{Math.round(props.celsius)}</strong>
                </div>
                <div className="col-6" id="c-f">
                    <span id="degrees">
                        ºC{" "}
                        |
                        <a href="/" id="fahrenheit-link" onClick={showInFahrenheit}>
                            {" "}
                            ºF
                        </a>
                    </span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row" id="numbers">
                <div className="col-6" id="big-temp">
                    <strong id="temperature">{Math.round(fahrenheit())}</strong>
                </div>
                <div className="col-6" id="c-f">
                    <span id="degrees">
                        <a href="/" id="celsius-link" onClick={showInCelsius}>
                            ºC
                        </a>{" "}
                        |{" "}ºF
                    </span>
                </div>
            </div>
        )
    }
    
}