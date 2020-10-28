import React from "react";
import "./ForecastWeather.css";

export default function ForecastWeather() {
  return (
    <div className="row" id="forecast-weather">
      <div className="col-4" id="dairy">
        <h5 className="day">Mon</h5>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt=""
          className="day-icon"
        />
        <div className="forecast-temperature">
          <h6 className="day-temp">
            {" "}
            16º | <span className="forecast-degrees">25º</span>
          </h6>
        </div>
      </div>
      <div className="col-4" id="dairy">
        <h5 className="day">Tue</h5>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt=""
          className="day-icon"
        />
        <div className="forecast-temperature">
          <h6 className="day-temp">
            {" "}
            16º | <span className="forecast-degrees">25º</span>
          </h6>
        </div>
      </div>
      <div className="col-4" id="dairy">
        <h5 className="day">Wed</h5>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt=""
          className="day-icon"
        />
        <div className="forecast-temperature">
          <h6 className="day-temp">
            {" "}
            16º | <span className="forecast-degrees">25º</span>
          </h6>
        </div>
      </div>
      <div className="col-4" id="dairy">
        <h5 className="day">Thu</h5>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt=""
          className="day-icon"
        />
        <div className="forecast-temperature">
          <h6 className="day-temp">
            {" "}
            16º | <span className="forecast-degrees">25º</span>
          </h6>
        </div>
      </div>
      <div className="col-4" id="dairy">
        <h5 className="day">Fri</h5>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt=""
          className="day-icon"
        />
        <div className="forecast-temperature">
          <h6 className="day-temp">
            {" "}
            16º | <span className="forecast-degrees">25º</span>
          </h6>
        </div>
      </div>
      <div className="col-4" id="dairy">
        <h5 className="day">Sat</h5>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt=""
          className="day-icon"
        />
        <div className="forecast-temperature">
          <h6 className="day-temp">
            {" "}
            16º | <span className="forecast-degrees">25º</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
