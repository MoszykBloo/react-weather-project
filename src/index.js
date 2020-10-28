import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WrapperApp from './WrapperApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div id="contenedor">
    <WrapperApp />
    <div className="creditos">
        <small>
          <a
            href="https://github.com/MoszykBloo/react-weather-project"
            target="blank"
            id="credits"
          >
            Open source code
          </a>{" "}
          <span id="my-name">by Monica Camacho</span>
        </small>
      </div>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
