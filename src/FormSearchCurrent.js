import React from "react";
import "./FormSearchCurrent.css";

export default function FormSearchCurrent() {
  return (
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
  );
}