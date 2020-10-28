import React from "react";
import "./Details.css";

export default function Details() {
  return (
    <div className="row" id="details">
      <div className="col-4 details">
        <p>
          Feels like: <span id="sensation"></span>20%
        </p>
      </div>
      <div className="col-4 details">
        <p>
          Humidity <span id="humidity"></span>30%
        </p>
      </div>
      <div className="col-4 details">
        <p>
          Wind: <span id="wind"></span> 4km/h
        </p>
      </div>
    </div>
  );
}