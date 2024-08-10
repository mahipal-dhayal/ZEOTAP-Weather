import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
      Created with ❤️ Mahipal Dhayal
      
      {" "}
      - 
      Connect With Me: {" "}
        <a target="_blank" href="https://www.linkedin.com/in/mahipaldhayal/">
          linkedin
        </a>{" "}
        |
        {" "}
        <a target="_blank" href="https://github.com/mahipal-dhayal">
          github
        </a>{" "}
        | 
        {" "}
        <a target="_blank" href="mailto:mahipaldhayal2002@gmail.com">Email</a>
      </div>
    </React.Fragment>
  );
}

export default App;
