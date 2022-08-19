import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Firebase from "./Firebase/config";
import Analytics from "./Firebase/config";

Firebase();
Analytics();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
      <App />
  </React.StrictMode>
);

reportWebVitals();
