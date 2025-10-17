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

  // This function is ONLY called when the "Convert" button is clicked
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
      // The API call happens here
      const response = await axios.post("/api/convert/", {
        value: parseFloat(value),
        fromUnit,
        toUnit,
      });
      setResult(response.data.result);
    } catch (err) {
      if (err.response) {
        const backendError =
          err.response.data.error || "An error occurred on the server.";
        setError(`Error: ${backendError}`);
      } else if (err.request) {
        setError("Backend not connected. Is the Django server running?");
      } else {
        setError(`An unexpected error occurred: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ NEW: Clears old result when changing units
  const handleFromUnitChange = (unit) => {
    setFromUnit(unit);
    setResult(null); // Clear previous result
    setError(""); // Clear previous error
  };

  // ✅ NEW: Clears old result when changing units
  const handleToUnitChange = (unit) => {
    setToUnit(unit);
    setResult(null); // Clear previous result
    setError(""); // Clear previous error
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
            onChange={(e) => {
              setValue(e.target.value);
              setResult(null); // Also clear result when typing a new value
              setError("");
            }}
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
                onClick={() => handleFromUnitChange(unit)} // Use the new handler
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
                onClick={() => handleToUnitChange(unit)} // Use the new handler
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
