import React from 'react'

import './App.css'

function App() {

  return (
          <>
            <div id="landing_page">
              <div id="navbar">
                <h1 id="nav-heading">
                  Temperature<span>Scaler</span>
                </h1>

                <div className="card">
                  <div className="card1">
                    <span>Temperature</span>
                  </div>

                  <div className="card2">
                         {/* <label htmlFor="temperature" className="label-text">Enter Temperature:</label> */}
                         <input type="text" id="x" placeholder="Enter degrees" className="label-text"></input>
                         {/* <input type="text" id="temperature" name="temperature" /> */}
                  </div>
                </div>
              </div>

              <div id="container">
                <div className="card3"></div>
                <div className="card3"></div>
              </div>
            </div>
          </>

  )
}

export default App
