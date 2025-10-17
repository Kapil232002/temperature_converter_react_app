import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div id="landing_page">
        {/* Navbar fixed */}
        <div id="navbar">
          <h1 id="nav-heading">
            Temperature<span>Scaler</span>
          </h1>
        </div>

        {/* Temperature Card outside navbar */}
        <div className="card">
          <div className="card1">
            <span>Temperature</span>
          </div>
          <div className="card2">
            <input
              type="number"
              id="x"
              placeholder="Enter degrees"
              className="label-text"
            />
          </div>
        </div>

        {/* From / To cards */}
        <div id="container">
          <div className="card-with-heading">
            <h3 className="card-heading">From</h3>
            <div className="card3">
              <button>Celcius (°C )</button>
              <button>Fahrenheit (°F )</button>
              <button>Kelvin (K)</button>
            </div>
          </div>

          <div className="card-with-heading">
            <h3 className="card-heading">To</h3>
            <div className="card3">
              <button>Celcius (°C )</button>
              <button>Fahrenheit (°F )</button>
              <button>Kelvin (K)</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
