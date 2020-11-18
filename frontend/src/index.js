import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Instructions from "./Instructions";

ReactDOM.render(
  <React.StrictMode>
    <Instructions />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
