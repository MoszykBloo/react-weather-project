import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import WrapperApp from './WrapperApp';

ReactDOM.render(
  <React.StrictMode>
    <div id="container">
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
