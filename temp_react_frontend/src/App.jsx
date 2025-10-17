// temp_react_frontend/src/App.jsx

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Celsius");
  const [toUnit, setToUnit] = useState("Fahrenheit");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (value === "" || value === null) {
      setError("Please enter a temperature value");
      setResult(null);
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/convert/", {
        value: parseFloat(value),
        fromUnit,
        toUnit,
      });
      setResult(response.data.result);
    } catch (err) {
      if (err.response) {
        // The backend responded with an error (e.g., 400, 500)
        const backendError =
          err.response.data.error || "An error occurred on the server.";
        setError(`Error: ${backendError}`);
      } else if (err.request) {
        // The request was made but no response was received
        setError("Backend not connected. Is the Django server running?");
      } else {
        // Something else happened
        setError(`An unexpected error occurred: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="landing_page">
      <div id="navbar">
        <h1 id="nav-heading">
          Temperature<span>Scaler</span>
        </h1>
      </div>

      <div className="card">
        <div className="card1">
          <span>Temperature</span>
        </div>
        <div className="card2">
          <input
            type="number"
            placeholder="Enter degrees"
            className="label-text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      <div id="container">
        <div className="card-with-heading">
          <h3 className="card-heading">From</h3>
          <div className="card3">
            {["Celsius", "Fahrenheit", "Kelvin"].map((unit) => (
              <button
                key={unit}
                className={fromUnit === unit ? "active" : ""}
                onClick={() => setFromUnit(unit)}
              >
                {unit}
              </button>
            ))}
          </div>
        </div>

        <div className="card-with-heading">
          <h3 className="card-heading">To</h3>
          <div className="card3">
            {["Celsius", "Fahrenheit", "Kelvin"].map((unit) => (
              <button
                key={unit}
                className={toUnit === unit ? "active" : ""}
                onClick={() => setToUnit(unit)}
              >
                {unit}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="convert-btn">
        <button onClick={handleConvert} disabled={loading}>
          {loading ? "Converting..." : "Convert"}
        </button>
      </div>

      {error && <div className="error-box">{error}</div>}

      {result !== null && (
        <div className="result-card">
          <h3>Converted Temperature</h3>
          <p>
            {result}° {toUnit}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

//               +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <div id="landing_page">
//         <div id="navbar">
//           <h1 id="nav-heading">
//             Temperature<span>Scaler</span>
//           </h1>
//           <div className="card">
//             <div className="card1">
//               <span>Temperature</span>
//             </div>
//             <div className="card2">
//               <input
//                 type="number"
//                 id="x"
//                 placeholder="Enter degrees"
//                 className="label-text"
//               ></input>
//             </div>
//           </div>
//         </div>
//         <div id="container">
//           <div className="card-with-heading">
//             <h3 className="card-heading">From</h3>
//             <div className="card3">
//               <button>Celcius (°C )</button>
//               <button>Fahrenheit (°F )</button>
//               <button>Kelvin (K)</button>
//             </div>
//           </div>
//           <div className="card-with-heading">
//             <h3 className="card-heading">To</h3>
//             <div className="card3">
//               <button>Celcius (°C )</button>
//               <button>Fahrenheit (°F )</button>
//               <button>Kelvin (K)</button>
//             </div>
//           </div>
//
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

//                              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <div id="landing_page">
//         {/* Navbar fixed */}
//         <div id="navbar">
//           <h1 id="nav-heading">
//             Temperature<span>Scaler</span>
//           </h1>
//         </div>

//         {/* Temperature Card outside navbar */}
//         <div className="card">
//           <div className="card1">
//             <span>Temperature</span>
//           </div>
//           <div className="card2">
//             <input
//               type="number"
//               id="x"
//               placeholder="Enter degrees"
//               className="label-text"
//             />
//           </div>
//         </div>

//         {/* From / To cards */}
//         <div id="container">
//           <div className="card-with-heading">
//             <h3 className="card-heading">From</h3>
//             <div className="card3">
//               <button>Celcius (°C )</button>
//               <button>Fahrenheit (°F )</button>
//               <button>Kelvin (K)</button>
//             </div>
//           </div>

//           <div className="card-with-heading">
//             <h3 className="card-heading">To</h3>
//             <div className="card3">
//               <button>Celcius (°C )</button>
//               <button>Fahrenheit (°F )</button>
//               <button>Kelvin (K)</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
